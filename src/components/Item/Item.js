import styles from "./Item.module.css";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Item = ({ item }) => {
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
    <div id={id} className={item__card}>
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
