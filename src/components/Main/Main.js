import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import {Route, Routes} from 'react-router-dom'

const Main = () => {
  return (
    <main style={{ margin: "1rem 0", display: "grid", placeContent: "center"}}>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/brand/:brandName" element={<ItemListContainer />} />
        <Route path="/sneaker/:sneakerName" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
