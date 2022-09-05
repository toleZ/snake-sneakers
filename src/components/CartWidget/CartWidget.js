import { BsCart } from "react-icons/bs";
import {  Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to={'/cart'}>
      <button className="btn btn-outline-success ms-2" type="submit">
        <BsCart />
      </button>
    </Link>
  );
};

export default CartWidget;
