/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Card } from 'semantic-ui-react'

type ProductListProps = {
  products: TProduct[]
}

/**
 * @param products TProduct[]
 * @returns ReactElement[]
 */
const mapProductsToCards = (products: TProduct[]): React.ReactElement[] =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={{
          /**
           * @returns React.ReactElement
           */
          children: (): React.ReactElement => (
            <Image src={image} width={333} height={333} />
          ),
        }}
        meta={{
          /**
           * @returns React.ReactElement
           */
          children: (): React.ReactElement => (
            <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>
          ),
        }}
      />
    </Link>
  ))

/**
 * @param props ProductListProps
 * @param props.products TProduct[]
 * @returns ReactElement
 */
const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
