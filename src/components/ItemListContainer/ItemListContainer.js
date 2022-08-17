const ItemListContainer = (prop) => {
  const { saludo, comision } = prop;
  return (
    <h1>
      {saludo}
      {comision}
    </h1>
  );
};

export default ItemListContainer;
