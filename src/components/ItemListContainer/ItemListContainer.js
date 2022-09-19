import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { brandName } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://63064480dde73c0f8457299d.mockapi.io/sneakers")
        .then((res) => res.json())
        .then((data) => {
          brandName !== undefined
            ? setItems(data.filter((e) => e.brand === brandName))
            : setItems(data);
        })
        .catch((error) => console.warn(error));
    }, 2000);

    return () => {
      setItems([])
    }
  }, [brandName]);

  if(items.length === 0){
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
