import styles from "./Item.module.css";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useWindowSize } from 'usehooks-ts'

const Item = ({ item, inCarousel }) => {
  const { width } = useWindowSize()

  const itemStyle = inCarousel ? 
    {width: '100%', height: '100%'} : 
    width <= 390 ?
      {width: '100%', margin:'.5rem'} :
      {width: '30%', margin:'.5rem'}

  const {
    item__card,
    item__img,
    item__title,
    item__brand,
    item__price,
    viewMore__btn,
  } = styles;
  const { name, brand, img, price, id } = item;

  return (
    <div style={itemStyle} className={item__card}>
      <img className={item__img} src={img} alt={name}></img>
      <h3 className={item__brand}>{brand}</h3>
      <h2 className={item__title}>{name}</h2>
      <span className={item__price}>
        desde <span style={{ color: "black" }}>${price}</span>
      </span>
      <Link to={`/sneaker/${id}`}>
        <span className={viewMore__btn}>
          Ver mas<AiOutlineRight />
        </span>
      </Link>
    </div>
  );
};

export default Item;
