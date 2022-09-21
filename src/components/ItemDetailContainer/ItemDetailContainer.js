import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { sneakerId } = useParams()

  useEffect(() => {
    const itemsCollection = collection(db, 'products')
    getDocs(itemsCollection)
      .then(res => {return res.docs.find(prod => prod.id === sneakerId)})
      .then(prod => setItem({id: prod.id, ...prod.data()}))
      .catch(error => console.warn(error))

    return () => setItem([])
  }, [sneakerId])

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
