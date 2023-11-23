import Head from 'next/head'
import Image from 'next/image'

import { Button, FormLine } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative flex w-full justify-center ">
        <form className="flex w-full max-w-md flex-col items-center gap-7 rounded-5 bg-white py-[12%]">
          <Image src="/logo.svg" alt="Logo" width={150} height={150} />
          <FormLine
            id="email"
            title="Email"
            required
            className="w-80"
            placeholder="Email"
          />
          <FormLine
            id="password"
            title="Password"
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
