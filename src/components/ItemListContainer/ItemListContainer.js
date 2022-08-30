import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemListContainer = () => {
  const [items, setItems] = useState();

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
      <ItemDetail item={items !== undefined && items[0]} />
    </>
  )
};

export default ItemListContainer;


/* {items !== undefined && items.map(item => <Item key={item.id} item={item} />)} */