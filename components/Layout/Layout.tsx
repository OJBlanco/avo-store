import React from 'react'

import Navbar from '@components/Navbar/Navbar'

/**
 * @param props Props
 * @param props.children ReactNode
 * @returns ReactElement
 */
const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <footer>this is the footer</footer>
    </main>
  )
}

export default Layout
