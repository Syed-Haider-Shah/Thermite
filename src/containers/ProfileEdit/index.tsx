import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Card, DropDown, FormLine } from '@/components'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/services/supabase'
import { IOption } from '@/types/model'
import { UpdateNameSchema, UpdatePasswordSchema } from '@/utils/yupConfig'

const COUNTIES = [
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

const ProfileEdit = () => {
  const { user } = useAuth()

  const [country, setCountry] = useState<IOption>(
    COUNTIES.find((val) => val.value === user.country) || COUNTIES[0]
  )
  const [isSavingPass, setIsSavingPass] = useState<boolean>(false)
  const [isSavingUser, setIsSavingUser] = useState<boolean>(false)

  const edit = useSearchParams().get('edit')
  const pathname = usePathname()

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors }
  } = useForm({
    resolver: yupResolver(UpdatePasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirm: ''
    }
  })

  const {
    register: registerUpdate,
    handleSubmit: handleUpdateSubmit,
    formState: { errors: updateErrors }
  } = useForm({
    resolver: yupResolver(UpdateNameSchema),
    mode: 'onBlur',
    defaultValues: {
      name: user.name || ''
    }
  })

  const handleUpdatePassword = useCallback(
    async ({ password }: { password: string }) => {
      setIsSavingPass(true)
      const { error } = await supabase.auth.updateUser({
        password
      })
      setIsSavingPass(false)

      if (error) toast.error(error.message)
      else toast.success('Password updated successfully')
    },
    []
  )

  const handleUpdateUser = useCallback(
    async ({ name }: { name: string }) => {
      setIsSavingUser(true)
      const { error } = await supabase.from('employees').update({
        name,
        country: country.value
      })

      setIsSavingUser(false)

      if (error) toast.error(error.message)
      else toast.success('Password updated successfully')
    },
    [country.value]
  )

  return (
    edit && (
      <Card className="gap-0 space-y-0 pb-1">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold leading-6">Profile Edit</h1>
          <Link
            href={{
              pathname
            }}
          >
            <Button active>Details</Button>
          </Link>
        </div>
        <div className="h-32 w-32 rounded-lg bg-gray" />
        <form
          onSubmit={handleUpdateSubmit(handleUpdateUser)}
          className="!mt-2 flex flex-wrap items-center gap-6"
        >
          <FormLine
            className="w-80"
            id="name"
            {...registerUpdate('name')}
            error={updateErrors.name?.message}
            required
            primary
            title="Name"
          />
          <DropDown
            title="Country"
            required
            setValue={setCountry}
            value={country}
            options={COUNTIES}
            className="w-80"
          />
          <Button isLoading={isSavingUser} className="py-2" active>
            Update Details
          </Button>
        </form>
        <form
          onSubmit={handlePasswordSubmit(handleUpdatePassword)}
          className="mt-4 flex flex-wrap items-center gap-6"
        >
          <FormLine
            className="w-80"
            id="password"
            {...registerPassword('password')}
            error={passwordErrors.password?.message}
            type="password"
            required
            primary
            title="Password"
          />
          <FormLine
            className="w-80"
            id="confirm"
            {...registerPassword('confirm')}
            error={passwordErrors.confirm?.message}
            type="password"
            required
            primary
            title="Confirm Password"
          />
          <Button
            isLoading={isSavingPass}
            type="submit"
            className="h-min py-2"
            active
          >
            Update Password
          </Button>
        </form>
      </Card>
    )
  )
}

export default ProfileEdit
