import styles from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ( { item } ) => {
    const {name, brand, description, img, price, stock} = item
    const {itemDetailContainer, itemImg, itemTitle, itemBrand, itemDescription, itemPrice, goCartBtn, link} = styles
    const [cant, setCant] = useState(0)

    const onAdd = (cnt) => {
        return cnt === 0 ? 
            console.error(`${cnt} no es una cantidad validad`) :
            (console.log(`Se han agregado ${cnt} "${name}" al carrito`), setCant(cnt));
    };

    return (
        item.name !== undefined &&
        <div className={itemDetailContainer}>
            <img src={img} alt={`${brand} shoes`} className={itemImg}/>
            <h2 className={itemTitle}>{name}</h2>
            <h3 className={itemBrand}>{brand}</h3>
            <p className={itemDescription}>{description}</p>
            <span className={itemPrice}>${price}</span>
            {
                cant > 0 ?
                    <Link to='/cart' className={link}><button className={goCartBtn}>Ir al carrito</button></Link>:
                    <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
            }
        </div>
    )
}

export default ItemDetail