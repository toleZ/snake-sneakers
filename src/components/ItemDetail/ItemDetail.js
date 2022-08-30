import styles from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (item) => {
    const {name, brand, description, img, price, stock} = item.item
    const {itemDetailContainer, itemImg, itemTitle, itemBrand, itemDescription, itemPrice} = styles

    const onAdd = () => {
        console.log(`Producto ${name} agregado al carrito`);
    };

    return (
        <div className={itemDetailContainer}>
            <img src={img} alt={`${brand} shoes`} className={itemImg}/>
            <h2 className={itemTitle}>{name}</h2>
            <h3 className={itemBrand}>{brand}</h3>
            <p className={itemDescription}>{description}</p>
            <span className={itemPrice}>${price}</span>
            <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail