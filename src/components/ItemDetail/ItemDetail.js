import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Spinner from '../Spinner/Spinner'
import { swal } from '../../sweetaler2Config'
import ItemsSlider from "../ItemsSlider/ItemsSlider";

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
    if(cnt <= 0) return
    
    addToCart(item, cnt)
    swal.fire({
      icon: 'success',
      text: 'Producto agregado al carrito',
      customClass: {
        container: 'position-absolute'
      },
      showConfirmButton: false,
      toast: true,
      timer: 1500,
      timerProgressBar: true,
      position: 'top-right'
    })
  };

  if(!item.name) return <Spinner />

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
          <button className={goCartBtn}>Terminar mi compra</button>
        </Link>
      }

      <ItemsSlider />
    </div>
  )
};

export default ItemDetail;
