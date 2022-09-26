import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import Form from "../Form/Form";
import { swal } from '../../sweetaler2Config'
import { Button } from "@mui/material";


const Cart = () => {
  const { totalSpan } = styles;
  const { cart, totalCart, clearCart } = useContext(CartContext);

  const [id, setId] = useState("");
  const handleId = (id) => {
    setId(id);
  };

  const total = totalCart();

  const finishBuy = () => {
    swal.fire({
      title: "Formulario de compra",
      html: (
        <Form
          cart={cart}
          total={total}
          handleId={handleId}
          clearCart={clearCart}
          alert={swal}
        />
      ),
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true
    });
  };

  if (id) {
    return (
      <h2
        style={{
          fontFamily: "Overpass",
          textAlign: "Center",
          fontSize: "1.5rem",
        }}
      >
        Gracias por tu compra, tu ID de seguimiento es:{" "}
        <Link to={`/tracker/${id}`}>{id}</Link>
      </h2>
    );
  }

  if (cart.length === 0) {
    return (
      <h2
        style={{
          fontFamily: "Overpass",
          textAlign: "Center",
          fontSize: "1.5rem",
        }}
      >
        No tienes ningun producto en tu carrito, puedes ir al{" "}
        <Link to="/">inicio</Link> para empezar a agregar productos
      </h2>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Open Sans" }}>
        Carrito🛒
      </h1>
      {cart.map((item) => (
        <CartDetail item={item} key={item.id} />
      ))}
      <span className={totalSpan}>Total ${total}</span>
      <Button onClick={finishBuy} variant="outlined" fullWidth>
        Terminar compra
      </Button>
    </div>
  );
};

export default Cart;
