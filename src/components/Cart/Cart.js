//import Form from "../Form/Form"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <main>
      <h1 style={{ textAlign: "center" , fontFamily: 'Open Sans'}}>Carrito</h1>
      {
        cart.length > 0 ?
          cart.map((item) => (
            <CartDetail item={item} />
          )) :
          <h2 style={{fontFamily: "Overpass", textAlign: "Center", fontSize: "1.5rem"}}>No tienes ningun producto en tu carrito, puedes ir al <Link to='/'>inicio</Link> para empezar a agregar productos</h2>
      }
    </main>
  );
};

export default Cart;
