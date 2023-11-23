import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, FormLine } from '@/components'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { LoginSchema } from '@/utils/yupConfig'

export default function Home() {
  const router = useRouter()

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
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) console.log(error)

      router.push(Paths.HOME)
    },
    [router]
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
          <Button type="submit" className="w-80 bg-lightIndigo text-white">
            Sign in
          </Button>
        </form>
      </div>
    </>
  )
}
