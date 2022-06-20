import React from 'react'

import { Container } from 'semantic-ui-react'

import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'

/**
 * @param props Props
 * @param props.children ReactNode
 * @returns ReactElement
 */
const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
