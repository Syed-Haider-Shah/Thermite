import Head from 'next/head'

import { ReactNode } from 'react'

import { Header, NavBar } from '@/components'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <base href={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <NavBar />
      <div className="flex flex-col w-full h-full p-5 items-center gap-3.5">
        <Header />
        <main id="main" className="w-full flex flex-col items-center bg-white">
          {children}
        </main>
        <footer />
      </div>
    </>
  )
}

export default Layout
