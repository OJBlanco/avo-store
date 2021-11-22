/* eslint-disable @typescript-eslint/naming-convention */
// import App from 'next/app'

import { ReactElement } from 'react'

import { AppProps } from 'next/app'

import Layout from '@components/Layout/Layout'

/**
 * @param props Props
 * @param props.Component NextComponentType
 * @param props.pageProps any
 * @returns ReactElement
 */
function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
