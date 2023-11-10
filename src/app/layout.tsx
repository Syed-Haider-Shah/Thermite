import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Innox Management',
  description: 'Innox Management Admin Panel'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mt-32 w-full max-w-5xl">{children}</main>
      </body>
    </html>
  )
}
