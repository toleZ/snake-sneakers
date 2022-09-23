import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TrackerInput = () => {
  const [orderId, setOrderId] = useState('')
  const navigate = useNavigate()

  const handleChangeOrderId = e => {
    setOrderId(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/tracker/${orderId}`)
    setOrderId('')
  }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input className="form-control me-2" type="search" placeholder="ID de la orden" aria-label="Search" value={orderId} onChange={handleChangeOrderId}/>
      <button className="btn btn-outline-primary" type="submit">Buscar</button>
    </form>
  )
}

export default TrackerInput