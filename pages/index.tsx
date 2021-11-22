import { FC, useEffect, useState } from 'react'

/**
 * @returns FC
 */
const Home: FC = () => {
  const [productList, setProduxtList] = useState<TProduct[]>([])

  useEffect(() => {
    getList()
  }, [])

  /**
   *
   */
  const getList = async (): Promise<void> => {
    try {
      const request = await window.fetch('/api/avo')
      if (request.status === 200) {
        const { data } = await request.json()
        setProduxtList(data)
      }
    } catch (error) {
      console.error('>>> Error', error)
    }
  }

  return (
    <div>
      <h1>Next.js TS</h1>
      {productList.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default Home
