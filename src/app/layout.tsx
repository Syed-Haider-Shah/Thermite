import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

import { ReactNode } from 'react'

import '@/styles/globals.css'

import { Header, NavBar } from '@/components'

const inter = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thermite',
  description: 'Thermite Ticket Management'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="flex w-full flex-col">
          <Header />
          <main className="relative m-8 overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
            {children}
          </main>
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
