import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://63064480dde73c0f8457299d.mockapi.io/sneakers")
        .then(res => res.json())
        .then(data => setItem(data[0]))
        .catch(error => console.warn(error));
    }, 2000)
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
