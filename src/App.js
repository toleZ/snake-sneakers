//Fragments
import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./index.css";

const App = () => {
  const onAdd = () => {
    console.log("Producto agregado");
  };

  return (
    <>
      <Header />
      <ItemListContainer saludo="Hola Comision " comision={37080} />
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  );
};

export default App;
