import Head from 'next/head'

import { ReactNode } from 'react'

import { Header, NavBar } from '@/components'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className="flex w-full max-w-[calc(100%-260px)] flex-col">
        <Header />
        <main className="m-8 flex flex-col gap-4 overflow-hidden">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
