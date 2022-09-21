import React, { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Form = ({ cart, total, handleId, clearCart }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: { name, phone, email },
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => {
        handleId(res.id);
        clearCart();
      })
      .catch((error) => console.warn(error));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleChangeName}
        />

        <input
          type="number"
          placeholder="Telefono"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
