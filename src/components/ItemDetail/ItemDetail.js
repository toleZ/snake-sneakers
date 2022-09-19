import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Spinner from '../Spinner/Spinner'

const ItemDetail = ({ item }) => {
  const { name, brand, description, img, price, stock } = item;
  const {
    itemDetailContainer,
    itemImg,
    itemTitle,
    itemBrand,
    itemDescription,
    itemPrice,
    goCartBtn,
    link,
  } = styles;

  const { isInCart, addToCart, cantOfItem } = useContext(CartContext);

  const onAdd = (cnt) => {
    return cnt === 0
      ? console.error(`${cnt} no es una cantidad validad`)
      : addToCart(item, cnt);
  };

  if(item.name === undefined){
    return (
      <Spinner />
    )
  }

  return (
    <div className={itemDetailContainer}>
      <img src={img} alt={`${brand} shoes`} className={itemImg} />
      <h2 className={itemTitle}>{name}</h2>
      <h3 className={itemBrand}>{brand}</h3>
      <p className={itemDescription}>{description}</p>
      <span className={itemPrice}>${price}</span>
      <ItemCount initial={cantOfItem(item.id)} stock={stock} onAdd={onAdd} />
      {isInCart(item.id) && 
        <Link to="/cart" className={link}>
          <button className={goCartBtn}>Terminar compra</button>
        </Link>
      }
    </div>
  )
};

export default ItemDetail;
