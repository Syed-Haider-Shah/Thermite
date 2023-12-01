import { useSearchParams } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, FormLine } from '@/components'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { UpdatePasswordSchema } from '@/utils/yupConfig'

const COUNTIES = [
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

const ProfileEdit = () => {
  const [country, setCountry] = useState<IOption>(COUNTIES[0])
  const edit = useSearchParams().get('edit')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(UpdatePasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirm: ''
    }
  })

  const handleUpdatePassword = useCallback(
    async ({ password }: { password: string }) => {
      const {} = await supabase.auth.updateUser({
        password
      })
    },
    []
  )

  return (
    edit && (
      <article className="rounded-5 bg-white p-4">
        <div className="h-32 w-32 rounded-lg bg-gray" />
        <form className="mt-4 flex flex-wrap items-center gap-6">
          <FormLine className="w-80" id="name" required primary title="Name" />
          <DropDown
            title="Country"
            required
            setValue={setCountry}
            value={country}
            options={COUNTIES}
            className="w-80"
          />
          <Button className="mt-6 py-2" active>
            Update Details
          </Button>
        </form>
        <form
          onSubmit={handleSubmit(handleUpdatePassword)}
          className="mt-4 flex flex-wrap items-center gap-6"
        >
          <FormLine
            className="w-80"
            id="password"
            {...register('password')}
            error={errors.password?.message}
            required
            primary
            title="Password"
          />
          <FormLine
            className="w-80"
            id="confirm"
            {...register('confirm')}
            error={errors.confirm?.message}
            required
            primary
            title="Confirm Password"
          />
          <Button type="submit" className="mt-4 py-2" active>
            Update Password
          </Button>
        </form>
      </article>
    )
  )
}

export default ProfileEdit
