import styles from './Item.module.css'

const Item = (item) => {
  const {item__card, item__img, item__title, item__brand, item__price} = styles
  const {name, brand, img, price, id} = item.item

  return (
    <div id={id} className={item__card}>
      <img className={item__img} src={img} alt={name}></img>
      <h2 className={item__title}>{name}</h2>
      <h3 className={item__brand}>{brand}</h3>
      <span className={item__price}>${price}</span>
    </div>
  );
};

export default Item;
