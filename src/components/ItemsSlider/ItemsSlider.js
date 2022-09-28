import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import ItemsCarousel from 'react-items-carousel';
import Item from '../Item/Item'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useWindowSize } from 'usehooks-ts'

const ItemsSlider = ({itemDeleted}) => {
  const [items, setItems] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const { width } = useWindowSize()

  const numberOfCards = width <= 390 ? 1 : 3
  const btnStyle = {border: 'none', background: 'none', fontSize: '1.5rem'}

  useEffect(() => {
    const itemsCollection = collection(db, 'products')

    getDocs(itemsCollection)
      .then(res => {
        return res.docs.map(prod => {
          return {
            id: prod.id,
            ...prod.data()
          }
        })
      })
      .then(prods => setItems(prods.filter(item => item.id !== itemDeleted.id)))
      .catch(error => console.warn(error))

    return () => setItems([])
  }, [itemDeleted])


  return (
    <div style={{margin: '2rem 0', padding: `0 40px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        gutter={10}
        numberOfCards={numberOfCards}
        leftChevron={<button style={btnStyle}>{<BsFillArrowLeftCircleFill/>}</button>}
        rightChevron={<button style={btnStyle}>{<BsFillArrowRightCircleFill />}</button>}
        outsideChevron
        chevronWidth={40}
      >
        {items.map(item => <Item key={item.id} item={item} inCarousel={true}/>)}
      </ItemsCarousel>
    </div>
  );
};

export default ItemsSlider;