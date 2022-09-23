import styles from './TrackerDetail.module.css'

const TrackerDetail = ({ item }) => {
  const { name, brand, img, cant, price } = item;
  const { itemCard, itemImg, itemName, itemBrand, itemInfo } = styles

  return (
    <div className={itemCard}>
      <img className={itemImg} src={img} alt={name} />
      <span>
        <h3 className={itemName}>{name}</h3>
        <h4 className={itemBrand}>{brand}</h4>
        <span className={itemInfo}>Cantidad: {cant}| Precio: ${price}| Total: ${price * cant}</span>
      </span>
    </div>
  );
};

export default TrackerDetail;
