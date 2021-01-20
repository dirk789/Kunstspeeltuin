
import './css/app.scss'
import { AppProps } from 'next/app'
import 'react-h5-audio-player/src/styles.scss'


import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <link rel="stylesheet" href="https://use.typekit.net/ppb8lgv.css" />
  </Head>
  <Component {...pageProps} />
  </>)
}