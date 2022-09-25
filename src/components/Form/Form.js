import React, { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button, Grid, TextField } from "@mui/material";

const Form = ({ cart, total, handleId, clearCart, alert }) => {
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

    alert.close();
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
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid item>
          <TextField
            margin="dense"
            type="text"
            label="Nombre"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={handleChangeName}
            name="name"
            required
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            margin="dense"
            type="email"
            label="Email"
            placeholder="email@example.com"
            value={email}
            onChange={handleChangeEmail}
            name="email"
            required
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            margin="dense"
            type="number"
            label="Phone"
            placeholder="+54 341 643-1624"
            value={phone}
            onChange={handleChangePhone}
            name="phone"
            required
            fullWidth
          />
        </Grid>

        <Grid item>
          <Button type="submit" variant="outlined" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
