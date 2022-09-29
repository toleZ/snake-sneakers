import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import {  Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useWindowSize } from 'usehooks-ts'

const CartWidget = () => {
  const {cartItems} = useContext(CartContext)
  const { width } = useWindowSize()

  const widgetMarginLeft = width <= 390 ? '.5rem 0 0' : '0 .5rem'
  return (
    <Link to={'/cart'} style={{textDecoration: 'none'}}>
      <button style={{margin: widgetMarginLeft}} className="form-control btn btn-outline-success d-flex justify-content-center align-items-center" type="submit">
        {
          cartItems() > 0 && 
          <span style={{margin: '0 5px'}}>{cartItems()}</span>
        }
        <BsCart style={{fontSize: '1.5rem'}}/>
      </button>
    </Link>
  );
};

export default CartWidget;
