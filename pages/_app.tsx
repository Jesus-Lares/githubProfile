import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '@/components'

import '@styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>View Profile | Github</title>
        <meta name="description" content="View your profile of github" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
