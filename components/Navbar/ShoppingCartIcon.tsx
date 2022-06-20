import React from 'react'

import Basket from '@icons/Basket'

type ShoppingCartIconProps = {
  cartCount: number
  name: string
}

/**
 * @param props ShoppingCartIconProps
 * @param props.cartCount number
 * @param props.name string
 * @returns ReactElement
 */
const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({
  cartCount,
  name,
}: ShoppingCartIconProps) => {
  /**
   * @returns React.ReactElement | string
   */
  const showCartCount = (): React.ReactElement | string => {
    if (!cartCount) {
      return `(0)`
    }
    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      )
    }
    return `(${cartCount})`
  }

  return (
    <div className="container">
      <Basket />
      <div className="text">
        {` ${name} `}
        {showCartCount()}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
      `}</style>
    </div>
  )
}

export default ShoppingCartIcon
