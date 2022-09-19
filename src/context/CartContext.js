import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      updateItemCant(item, cant);
    } else {
      cant > 0 && setCart([...cart, { ...item, cant }]);
    }
  };

  const updateItemCant = (item, cant) => {
    const updateProducts = cart.map((prod) => {
      return prod.id === item.id ?
        {...prod, cant: cant,} :
        prod
      });
    setCart(updateProducts);
  };

  const removeItem = (itemId) => {
    /* 
    const index = cart.findIndex(e => e.id === itemId)
    const cartCopy = [...cart].splice(index, 1)
    setCart(cartCopy) 
    */

    const cartFiltered = cart.filter((e) => e.id !== itemId);
    setCart(cartFiltered);
  };

  const clear = () => {
    setCart([]);
  };

  const cartItems = () => {
    return [...cart].reduce((acc, cur) => acc + cur.cant, 0);
  };

  const cantOfItem = (itemId) => {
    const item = [...cart].find((e) => e.id === itemId);
    return item?.cant;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clear,
        isInCart,
        cartItems,
        cantOfItem,
        updateItemCant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
