import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { Layout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}