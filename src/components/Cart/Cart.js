//import Form from "../Form/Form"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart} = useContext(CartContext)

    return (
        <main>
            <h1>Cart</h1>
            {cart.map(item =>
                <div key={item.id}>
                    <h3>{item.name}</h3>
                </div>
            )}
        </main>
    )
}

export default Cart