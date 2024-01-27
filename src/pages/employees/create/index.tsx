import { useRouter } from 'next/router'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, DropDown, FormLine } from '@/components'
import { Modal } from '@/containers'
import { useAuth } from '@/context/AuthContext'
import { IOption } from '@/types/model'
import { CreateEmployeeSchema } from '@/utils/yupConfig'

const ROLES = [
  { name: 'Employee', value: 'user' },
  { name: 'Admin', value: 'admin' },
  { name: 'Super User', value: 'superuser' }
]

const COUNTIES = [
  { name: 'Pakistan', value: 'pakistan' },
  { name: 'South Africa', value: 'south_africa' },
  { name: 'Australia', value: 'australia' },
  { name: 'United States', value: 'united_states' },
  { name: 'Canada', value: 'canada' },
  { name: 'China', value: 'china' }
]

const CreateEmployee = () => {
  const [country, setCountry] = useState<IOption>(COUNTIES[0])
  const [role, setRole] = useState<IOption>(ROLES[0])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CreateEmployeeSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
      password: ''
    }
  })

  const handleCreateEmployee = useCallback(
    async ({
      name,
      password,
      email
    }: {
      name: string
      email: string
      password: string
    }) => {
      if (user.role !== 'admin' && user.role !== 'superuser') {
        toast.error('Invalid Permission')
        return
      }

      setIsLoading(true)

      const res = await fetch('/api/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          name,
          role: role.value,
          country: country.value
        })
      })

      const { message, error } = (await res.json()) as {
        message?: string
        error?: string
      }

      setIsLoading(false)

      if (error) {
        toast.error(error)
        return
      } else if (message) toast.success(message)
      router.back()
    },
    [country.value, role.value, router, user.role]
  )

  return (
    <Modal showModal onClose={router.back} title="Create Employee">
      <form
        onSubmit={handleSubmit(handleCreateEmployee)}
        className="relative space-y-5"
      >
        <div className="mt-5 flex flex-1 flex-wrap gap-6 rounded-5 bg-lightGray p-5">
          <div className="flex w-full flex-col items-center space-y-2">
            <div className="h-28 w-28 rounded-full bg-lightIndigo" />
            <Button className="border border-black/10 bg-transparent px-7 py-1.5 text-black/90">
              Upload Image
            </Button>
          </div>
          <FormLine
            id="name"
            title="Name"
            {...register('name')}
            error={errors.name?.message}
            primary
            className="w-80"
          />
          <FormLine
            id="email"
            title="Email"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            primary
            className="w-80"
          />
          <FormLine
            id="password"
            title="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
            primary
            className="w-80"
          />
          <DropDown
            title="Country"
            setValue={setCountry}
            value={country}
            options={COUNTIES}
            className="w-80"
          />
          <DropDown
            setValue={setRole}
            value={role}
            title="Role"
            options={ROLES}
            className="w-80"
          />
        </div>
        <div className="mb-2 flex w-full justify-end pr-3">
          <Button type="submit" isLoading={isLoading} active>
            Create
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateEmployee
