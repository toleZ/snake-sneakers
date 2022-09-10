import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.dir(e)
    console.log(`${name} ${lastName}`)
  }

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeLastName = e => {
    setLastName(e.target.value)
  }

  return(
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" name="name" value={name} onChange={handleChangeName} />

        <input type="text" placeholder="Apellido" name="lastName" value={lastName} onChange={handleChangeLastName} />

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form