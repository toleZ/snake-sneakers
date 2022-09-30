import NotFund from "../NotFound/NotFound";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import Tracker from "../Tracker/Tracker";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: 'center',
        alignItems: "flex-start",
        backgroundImage:
          'url("https://www.toptal.com/designers/subtlepatterns/uploads/greek-vase.png")',
      }}
    >
      <Routes>
        <Route path="*" element={<NotFund />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/brand/:brandName" element={<ItemListContainer />} />
        <Route path="/sneaker/:sneakerId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tracker/:orderId" element={<Tracker />} />
      </Routes>
    </main>
  );
};

export default Main;
