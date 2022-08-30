import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://63064480dde73c0f8457299d.mockapi.io/sneakers")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((error) => console.warn(error));
    }, 2000)
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  )
};

export default ItemListContainer;