/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState, useContext } from 'react'

import { Input, Icon, Transition } from 'semantic-ui-react'

import { useCartMutations } from '@store/Cart'

type AddToCartProps = {
  product: TProduct
}

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
/**
 * @returns Promise<void>
 */
const addToCartRequest = (): Promise<void> =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

/**
 * @param quantity number
 * @returns string
 */
const validate = (quantity: number): string => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

/**
 * @param props AddToCartProps
 * @param props.product TProduct
 * @returns ReactElement
 */
const AddToCart: React.FC<AddToCartProps> = ({ product }: AddToCartProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  /**
   *
   */
  const toggleMessage = (): void => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  /**
   *
   */
  const handleSubmit = async (): Promise<void> => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  /**
   * @param props Props
   * @param props.target React.ChangeEvent<HTMLInputElement>
   * @returns void
   */
  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void =>
    setQuantity(parseInt(target.value, 10))

  return (
    <>
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        error={!!error}
        onChange={handleChange}
        action={{
          color: 'green',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: handleSubmit,
          loading,
          disabled: loading,
        }}
      />
      {error && (
        <div style={{ color: 'red', position: 'absolute' }}>{error}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: 'green', position: 'absolute' }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
    </>
  )
}

export default AddToCart
