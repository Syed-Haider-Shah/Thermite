import Head from 'next/head'
import { usePathname } from 'next/navigation'

import { ReactNode } from 'react'

import { Header, NavBar } from '@/components'
import { cn } from '@/utils/cn'

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <>
      <Head>
        <title>Thermite</title>
        <meta name="description" content="Thermite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {pathname !== '/' && <NavBar />}
      <div
        className={cn('flex w-full flex-col', {
          'max-w-[calc(100%-260px)]': pathname !== '/'
        })}
      >
        {pathname !== '/' && <Header />}
        <main className="m-8 flex flex-col gap-4 overflow-hidden">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
