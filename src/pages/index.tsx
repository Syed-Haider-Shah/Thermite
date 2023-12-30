import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '@/components'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { LoginSchema } from '@/utils/yupConfig'

const Home = () => {
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

  useEffect(() => {
    if (errors.email?.message) toast.error(errors.email.message)
    if (errors.password?.message) toast.error(errors.password.message)
  }, [errors.email?.message, errors.password?.message])

  return (
    <>
      <Head>
        <title>Login | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="absolute right-0 top-0 flex h-screen w-screen">
        <Image
          src="/home.webp"
          alt="home-art"
          priority
          width={1500}
          height={900}
          className="hidden w-1/2 object-cover md:block"
        />
        <div className="flex w-full min-w-95 flex-col items-center justify-center gap-5 bg-background md:w-1/2">
          <h1 className="text-2xl font-semibold">Welcome back to Thermite</h1>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col rounded-2.5 bg-white p-4 shadow-md"
          >
            <label title="email" htmlFor="email">
              <input
                id="email"
                placeholder="Email"
                type="email"
                required
                className="w-80 border-x border-t border-black/10 p-2 outline-none"
                {...register('email')}
              />
            </label>
            <label title="password" htmlFor="password">
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="w-80 border border-black/10 p-2 outline-none"
                {...register('password')}
              />
            </label>
            <Button
              type="submit"
              isLoading={isLoading}
              active
              className="mt-3 w-80 p-2"
            >
              Sign in
            </Button>
            <Link
              className="mt-2 text-sm font-semibold hover:underline"
              href={Paths.FORGET_PASSWORD}
            >
              Forget password ?
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
