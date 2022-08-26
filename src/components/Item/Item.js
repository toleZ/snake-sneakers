import ItemCount from "../ItemCount/ItemCount";
import styles from './Item.module.css'

const Item = (item) => {
  const {item__card, item__img, item__title, item__brand, item__price} = styles
  const {name, brand, img, price, stock, id} = item.item
  const onAdd = () => {
    console.log(`Producto ${name} agregado al carrito`);
  };

  return (
    <div id={id} className={item__card}>
      <img className={item__img} src={img} alt={name}></img>
      <h2 className={item__title}>{name}</h2>
      <h3 className={item__brand}>{brand}</h3>
      <span className={item__price}>${price}</span>

      <ItemCount stock={stock} initial={0} onAdd={onAdd} />
    </div>
  );
};

export default Item;
