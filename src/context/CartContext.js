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
    if(isInCart(itemId)){
      const index = cart.findIndex(e => e.id === itemId)
      const newCart = cart.slice(index, 1)
      setCart(newCart)
    }
  }

  const clear = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeItem, clear, isInCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider