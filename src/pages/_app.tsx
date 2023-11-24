import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import '@/styles/globals.css'

import { Layout } from '@/components'
import { AuthProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster
        position="bottom-right"
        containerStyle={{
          bottom: '1.25rem',
          right: '1.25rem'
        }}
      />
    </AuthProvider>
  )
}
