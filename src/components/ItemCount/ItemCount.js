import { GoDash, GoPlus } from "react-icons/go";
import styles from "./ItemCount.module.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { itemQuantContainer, itemQuant, btns, addCartBtn } = styles;
  const [quant, setQuant] = useState(initial);

  const sumarProducto = () => {
    quant < stock && setQuant(quant + 1);
  };

  const restarProducto = () => {
    quant > 0 && setQuant(quant - 1);
  };

  return (
    <div className={itemQuantContainer}>
      <div className={itemQuant}>
        <GoDash className={btns} onClick={restarProducto} />
        <span>{quant}</span>
        <GoPlus className={btns} onClick={sumarProducto} />
      </div>

      <button className={addCartBtn} onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
