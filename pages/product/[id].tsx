import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

/**
 * @returns ReactElement
 */
const ProductItem = (): React.ReactElement => {
  const [product, setProduct] = useState<TProduct>()

  const { query } = useRouter()

  useEffect(() => {
    getProduct()
  }, [])

  /**
   *
   */
  const getProduct = async (): Promise<void> => {
    try {
      const request = await window.fetch(`/api/avo/${query.id}`)
      if (request.status === 200) {
        const { data } = await request.json()
        setProduct(data)
      }
    } catch (error) {
      console.error('>>> Error', error)
    }
  }
  return <div>Esta es la apgina del producto: {product?.name}</div>
}

export default ProductItem
