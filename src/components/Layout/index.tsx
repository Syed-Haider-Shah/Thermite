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
      <Header />
      <main id="main" className="flex flex-row w-full h-full">
        <NavBar />
        <section>{children}</section>
        <aside></aside>
      </main>
      <footer />
    </>
  )
}

export default Layout
