import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const addToCart = (item, cant) => {
    setCart([...cart, {...item, cant}])
  }

  const removeItem = (itemId) => {
    /* 
    const index = cart.findIndex(e => e.id === itemId)
    const cartCopy = [...cart].splice(index, 1)
    setCart(cartCopy) 
    */

    const cartFiltered = cart.filter(e => e.id !== itemId)
    setCart(cartFiltered)
  }

  const clear = () => {
    setCart([])
  }

  const cartItems = () => {
    return [...cart].reduce((acc, cur) => acc + cur.cant, 0)
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeItem, clear, isInCart, cartItems}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider