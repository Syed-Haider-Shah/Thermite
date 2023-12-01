import Head from 'next/head'
import Image from 'next/image'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, FormLine } from '@/components'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { LoginSchema } from '@/utils/yupConfig'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSignIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      setIsLoading(false)
      if (error) toast.error(error.message)
      else window.location.replace(Paths.HOME)
    },
    []
  )

  return (
    <>
      <Head>
        <title>Login | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative flex w-full justify-center ">
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex w-full max-w-md flex-col items-center gap-7 rounded-5 bg-white py-[24vh]"
        >
          <Image src="/logo.svg" alt="Logo" width={150} height={150} />
          <FormLine
            id="email"
            title="Email"
            required
            className="w-80"
            placeholder="Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <FormLine
            id="password"
            title="Password"
            {...register('password')}
            error={errors.password?.message}
            type="password"
            required
            className="w-80"
            placeholder="Password"
          />
          <Button
            type="submit"
            isLoading={isLoading}
            className="w-80 bg-lightIndigo text-white hover:bg-indigo"
          >
            Sign in
          </Button>
        </form>
      </div>
    </>
  )
}
