//import Form from "../Form/Form"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Cart.module.css'

const Cart = () => {
    const {cart} = useContext(CartContext)
    
    const {itemCard, itemInfo, itemName, itemBrand, itemImg} = styles

    return (
        <main>
            <h1>Cart</h1>
            {cart.map(item =>
                <div key={item.id} className={itemCard}>
                    <img src={item.img} alt={item.name} className={itemImg}/>
                    <span className={itemInfo}>
                        <h3 className={itemName}>{item.name}</h3>
                        <h4 className={itemBrand}>{item.brand}</h4>
                    </span>
                </div>
            )}
        </main>
    )
}

export default Cart