import { ReactNode } from 'react'

import { Header, NavBar } from '@/components'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="flex w-full max-w-lg flex-col">
        <Header />
        <main className="m-8 flex flex-col gap-4 overflow-hidden">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
