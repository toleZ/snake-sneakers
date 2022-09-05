import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { sneakerName } = useParams()

  useEffect(() => {
    setTimeout(() => {
      fetch("https://63064480dde73c0f8457299d.mockapi.io/sneakers")
        .then(res => res.json())
        .then(data => setItem(data.find(e => e.name === sneakerName)))
        .catch(error => console.warn(error));
    }, 2000)
  }, [sneakerName]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
