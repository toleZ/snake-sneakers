import styles from "./CartDetail.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDetail = ({item}) => {
  const { removeItem } = useContext(CartContext);
  const { itemCard, itemInfo, itemName, itemBrand, itemImg, btn } = styles;

  return (
    <div key={item.id} className={itemCard}>
      <div style={{ display: "flex" }}>
        <img src={item.img} alt={item.name} className={itemImg} />
        <span className={itemInfo}>
          <h3 className={itemName}>{item.name}</h3>
          <h4 className={itemBrand}>{item.brand}</h4>
        </span>
      </div>
      <button
        className={btn}
        onClick={() => {
          removeItem(item.id);
        }}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default CartDetail;
