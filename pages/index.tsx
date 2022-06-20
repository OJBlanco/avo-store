/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useEffect, useState } from 'react'

import { GetStaticProps } from 'next'
import Link from 'next/link'

import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import { SectionHome } from '@styles/general'

/**
 *
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

/**
 * @param props Props
 * @param props.productList TProduct[]
 * @returns FC
 */
const Home: FC<{ productList: TProduct[] }> = ({ productList }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <SectionHome>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </SectionHome>
      <ProductList products={productList} />
    </Layout>
  )
}

export default Home
