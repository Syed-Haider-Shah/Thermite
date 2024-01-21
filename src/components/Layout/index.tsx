import { Hanken_Grotesk } from 'next/font/google'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

import { ReactNode } from 'react'

import { Header, NavBar } from '@/components'
import { cn } from '@/utils/cn'

const inter = Hanken_Grotesk({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

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
        className={cn(
          'flex w-full flex-col text-darkIndigo',
          {
            'max-w-[calc(100%-260px)]': pathname !== '/'
          },
          inter.className
        )}
      >
        {pathname !== '/' && <Header />}
        <main className="flex h-full flex-col gap-4 overflow-x-hidden p-8">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
