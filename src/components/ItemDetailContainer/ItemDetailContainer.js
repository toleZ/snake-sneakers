import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDoc, doc} from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { sneakerId } = useParams()

  useEffect(() => {
    const itemsCollection = collection(db, 'products')
    const ref = doc(itemsCollection, sneakerId)

    getDoc(ref)
      .then(res => setItem({id: res.id, ...res.data()}))
      .catch(error => console.warn(error))

    return () => setItem([])
  }, [sneakerId])

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
