/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { Dispatch, useContext, useReducer } from 'react'

export type CartItemType = TProduct & { quantity: number }

export type CartState = {
  [key: string]: CartItemType
}

export type CartAction = {
  type: 'add' | 'remove'
  item: TProduct
  quantity?: number
}

const defaultState = {} as CartState

const CartItemsContext = React.createContext(defaultState)
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
)

/**
 * @param props props
 * @param props.children ReactNode
 * @returns ReactElement
 */
const CartProvider = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => {
  const [state, dispatch] = useReducer(cartReducers, defaultState)

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  )
}

/**
 * @param state CartState
 * @param props CartAction
 * @param props.item TProduct
 * @param props.type add | remove
 * @param props.quantity number
 * @returns CartState
 */
function cartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
): CartState {
  const existingCartItem = state[item.id]

  switch (type) {
    case 'add': {
      if (existingCartItem !== undefined) {
        const quantity = existingCartItem.quantity + qtyToAdd
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      }
    }

    case 'remove': {
      if (existingCartItem === undefined) {
        return state
      }

      const quantity = existingCartItem.quantity - 1
      if (quantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      const newCartItems = { ...state }
      delete newCartItems[item.id]
      return newCartItems
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

/**
 * @param sum number
 * @param item CartItemType
 * @returns number
 */
const getCartSubTotal = (sum: number, item: CartItemType): number => {
  sum += item.price * item.quantity
  return sum
}
/**
 * @param sum number
 * @param item CartItemType
 * @returns number
 */
const getCartCount = (sum: number, item: CartItemType): number =>
  sum + item.quantity

type CartInfo = {
  items: CartItemType[]
  itemsById: CartState
  count: number
  subTotal: number
}

/**
 * @returns CartInfo
 */
export const useCart = (): CartInfo => {
  const itemsById = useContext(CartItemsContext)
  const items = Object.values(itemsById)

  const count = items.reduce(getCartCount, 0)
  const subTotal = items.reduce(getCartSubTotal, 0)

  return {
    items,
    itemsById,
    count,
    subTotal,
  }
}

type CartMutations = {
  addToCart: (product: TProduct, quantity?: number) => void
  removeFromCart: (product: TProduct) => void
}
/**
 * @returns CartMutations
 */
export const useCartMutations = (): CartMutations => {
  const dispatch = useContext(CartDispatchContext)

  /**
   * @param product TProduct
   * @param quantity number
   * @returns void
   */
  const addToCart = (product: TProduct, quantity?: number): void =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    })

  /**
   * @param product TProduct
   * @returns void
   */
  const removeFromCart = (product: TProduct): void =>
    dispatch({
      type: 'remove',
      item: product,
    })

  return {
    addToCart,
    removeFromCart,
  }
}

export default CartProvider
