import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    const itemsCollection = collection(db, 'products')
    getDocs(itemsCollection)
      .then(res => {
        const prods = res.docs.map(prod => {
          return {
            id: prod.id,
            ...prod.data()
          }
        })
        brandName
            ? setItems(prods.filter((e) => e.brand === brandName))
            : setItems(prods);
      })
      .catch(error => console.warn(error))

    return () => setItems([])
  }, [brandName])

  if (items.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
