import React from 'react'

import Link from 'next/link'

/**
 * @returns ReactElment
 */
const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </menu>
      </nav>
    </div>
  )
}

export default Navbar
