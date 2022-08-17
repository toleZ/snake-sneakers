//Fragments
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer saludo="Hola Comision " comision={37080} />
    </>
  );
};

export default App;
