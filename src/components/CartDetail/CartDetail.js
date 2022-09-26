import styles from "./CartDetail.module.css";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { swal } from '../../sweetaler2Config'

const CartDetail = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const { itemDetail, itemCard, itemInfo, itemName, itemBrand, itemImg, btn } = styles;
  const {id, name, brand, img, price, cant} = item

  const removeItemAlert = () => {
    swal.fire({
      icon: 'success',
      text: 'Producto eliminado del carrito',
      customClass: {
        container: 'position-absolute'
      },
      showConfirmButton: false,
      toast: true,
      timer: 1500,
      timerProgressBar: true,
      position: 'top-right'
    })
  }

  return (
    <div className={itemCard}>
      <div style={{ display: "flex" }}>
        <img src={img} alt={name} className={itemImg} />
        <div className={itemDetail}>
          <h3 className={itemName}>{name}</h3>
          <h4 className={itemBrand}>{brand}</h4>
        </div>

        <div className={itemInfo}>
          <span>Cantidad: {cant}u</span>
          <span>Precio: ${price}/u</span>
          <span>Total: ${price * cant}</span>
        </div>
      </div>
      <button
        className={btn}
        onClick={() => {
          removeItem(id);
          removeItemAlert()
        }}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default CartDetail;
