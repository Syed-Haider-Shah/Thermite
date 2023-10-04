import Head from 'next/head'

import { ReactNode } from 'react'

import NavBar from '@/components/NavBar'

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

      <div className="flex flex-col items-center">
        <NavBar />
        <main id="main" className="flex flex-row w-full">
          <nav></nav>
          <section>{children}</section>
          <aside></aside>
        </main>
        <footer />
      </div>
    </>
  )
}

export default Layout
