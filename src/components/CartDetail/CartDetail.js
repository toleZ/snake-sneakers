import styles from "./CartDetail.module.css";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDetail = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const { itemCard, itemInfo, itemName, itemBrand, itemImg, btn } = styles;
  const {id, name, brand, img, price, cant} = item

  return (
    <div className={itemCard} key={id}>
      <div style={{ display: "flex" }}>
        <img src={img} alt={name} className={itemImg} />
        <span className={itemInfo}>
          <h3 className={itemName}>{name}</h3>
          <h4 className={itemBrand}>{brand}</h4>
        </span>

        <span>
          Cantidad: {cant} |
          Precio: ${price} |
          Total: ${price * cant}
        </span>
      </div>
      <button
        className={btn}
        onClick={() => {
          removeItem(id);
        }}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default CartDetail;
