const TrackerDetail = ({ item }) => {
  const { name, brand, img, cant, price } = item;

  return (
    <div style={{ display: "flex" }}>
      <img src={img} alt={name} />
      <span>
        <h3>{name}</h3>
        <h4>{brand}</h4>
        Cantidad: {cant}| Precio: ${price}| Total: ${price * cant}
      </span>
    </div>
  );
};

export default TrackerDetail;
