import React from 'react'

import { useRouter } from 'next/router'

/**
 * @returns ReactElement
 */
const ProductItem = (): React.ReactElement => {
  const { query } = useRouter()
  return <div>Esta es la apgina del producto: {query.id}</div>
}

export default ProductItem
