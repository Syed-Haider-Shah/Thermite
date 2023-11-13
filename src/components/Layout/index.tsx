import { ReactNode } from 'react'

import { Header, NavBar } from '@/components'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="m-8 overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
