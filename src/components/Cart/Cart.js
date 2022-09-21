//import Form from "../Form/Form"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from "react-router-dom";
import styles from './Cart.module.css'
import Form from "../Form/Form";
import { useState } from "react";

const Cart = () => {
  const {totalSpan} = styles
  const { cart, totalCart, clearCart } = useContext(CartContext);

  const [id, setId] = useState('')
  const handleId = id => {
    setId(id)
  }

  const total = totalCart()

  if(id){
    return <h2 style={{fontFamily: "Overpass", textAlign: "Center", fontSize: "1.5rem"}}>Gracias por tu compra, tu ID de seguimiento es: {id}</h2>
  }

  if(cart.length === 0){
    return <h2 style={{fontFamily: "Overpass", textAlign: "Center", fontSize: "1.5rem"}}>No tienes ningun producto en tu carrito, puedes ir al <Link to='/'>inicio</Link> para empezar a agregar productos</h2>
  }
  
  return (
    <>
      <h1 style={{ textAlign: "center" , fontFamily: 'Open Sans'}}>Carrito🛒</h1>
      {
        cart.map((item) => (
          <CartDetail item={item} key={item.id}/>
        ))
      }
      <span className={totalSpan}>Total ${total}</span>
      <Form cart={cart} total={total} handleId={handleId} clearCart={clearCart}/>
    </>
  );
};

export default Cart;
