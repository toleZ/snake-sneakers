import Item from "../Item/Item";
import styles from './ItemList.module.css'

const ItemList = ({ items }) => {
    const {prods__container} = styles

    return (
        <div className={prods__container}>
            {items.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
};

export default ItemList;
