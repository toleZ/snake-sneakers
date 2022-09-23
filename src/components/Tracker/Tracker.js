import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import TrackerDetail from "../TrackerDetail/TrackerDetail";

const Tracker = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    const ordersCollection = collection(db, "orders");
    const ref = doc(ordersCollection, orderId);

    getDoc(ref)
      .then((res) => setOrder({ id: res.id, ...res.data()}))
      .catch((error) => console.warn(error));
    
    return () => setOrder()
  }, [orderId]);

  if(!order) return <Spinner />
  if(order.items === undefined) return <h1 style={{textAlign: 'center'}}>Nro de orden <span style={{color: '#0d6efd'}}>{order.id}</span> no encontrada 😞</h1>

  return(
    <div>
      <h1 style={{textAlign: 'center'}}>Order: <span style={{color: '#0d6efd'}}>{order.id}</span></h1>
      {
        order.items?.map(item => (
          <TrackerDetail item={item} key={item.id} />
        ))
      }
    </div>
  )
};

export default Tracker;
