import { FC } from 'react'

import Navbar from '@components/Navbar/Navbar'

/**
 * @returns FC
 */
const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Next.js TS</h1>
    </div>
  )
}

export default Home
