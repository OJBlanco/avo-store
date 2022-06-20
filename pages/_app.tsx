/* eslint-disable @typescript-eslint/naming-convention */
// import App from 'next/app'

import { ReactElement } from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import CartProvider from '@store/Cart'
import GlobalStyle from '@styles/global'
import Theme from '@styles/theme'

import 'semantic-ui-css/semantic.min.css'

/**
 * @param props Props
 * @param props.Component NextComponentType
 * @param props.pageProps any
 * @returns ReactElement
 */
function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={Theme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
