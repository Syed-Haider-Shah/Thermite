import Head from 'next/head'
import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, FormLine } from '@/components'
import { Paths } from '@/constants'
import { supabase } from '@/services/supabase'
import { cn } from '@/utils/cn'
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
          src="/art2.jpg"
          alt="home-art"
          priority
          width={1500}
          height={900}
          className="hidden w-1/2 object-cover md:block"
        />

        <div className="flex w-full min-w-95 flex-col items-center justify-center bg-white md:w-1/2">
          <Image
            src="/logo.svg"
            className="mt-6 px-1"
            alt="logo"
            width={300}
            height={120}
          />
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="mt-20 flex h-[50%] w-[60%] flex-col gap-10 bg-white"
          >
            <div className="ml-2 flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Login</h1>
              <h1 className="text-sm font-normal text-gray">
                Welcome back to Thermite
              </h1>
            </div>
            <div className="flex flex-col gap-10 px-2">
              <fieldset
                className={cn(
                  'relative box-border h-10 rounded-lg border-4',
                  'border-loadGray focus-within:border-loadBlue'
                )}
              >
                <div className="absolute z-10 w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Email
                </div>
                <FormLine
                  id="email"
                  type="email"
                  cusForm
                  {...register('email')}
                  className="h-8 translate-y-0"
                />
              </fieldset>
              <fieldset
                className={cn(
                  'relative box-border h-10 rounded-lg border-4',
                  'border-loadGray focus-within:border-loadBlue'
                )}
              >
                <div className="absolute z-10 w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
                  Password
                </div>
                <FormLine
                  id="password"
                  type="password"
                  cusForm
                  {...register('password')}
                  className="h-8 translate-y-0"
                />
              </fieldset>
            </div>
            <div className="flex justify-between px-2">
              <div className="text-gray">
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <label
                    title="sample"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[0.25rem] border-loadGray focus-within:border-loadBlue"
                  >
                    <input
                      type="checkbox"
                      title="sample"
                      className="ring-cursor-pointer h-2 w-2 cursor-pointer appearance-none rounded-full bg-transparent accent-loadBlue ring-0 ring-loadBlue ring-offset-0 focus:bg-loadBlue focus:ring-2"
                    ></input>
                  </label>
                  Remember me
                </div>
              </div>
              <button className="text-sm font-medium text-loadBlue md:text-base">
                Forgot Password?
              </button>
            </div>
            <Button
              type="submit"
              isLoading={isLoading}
              className="mx-2 flex items-center justify-center !rounded-2.5 bg-loadBlue/90 p-3 text-white hover:bg-loadBlue"
            >
              Login
            </Button>
            <div className="ml-2.5 flex gap-2">
              <div className="text-sm text-gray md:text-base">
                Need help with something?
              </div>
              <button className="text-sm font-medium text-loadBlue md:text-base">
                Contact Support
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
