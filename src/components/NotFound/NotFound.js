import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useWindowSize } from 'usehooks-ts'

const NotFund = () => {
  const {width} = useWindowSize()

  const cardWidth = width <= 390 ? '90%' : '40%'

  return (
    <div style={{ alignSelf: "center", textAlign: "center", width: cardWidth, backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid #ccc', borderRadius: '1rem', padding: '1rem' }}>
      <h1 style={{ fontFamily: "var(--font-primary)" }}>⚠️ 404 ⚠️</h1>
      <h2 style={{ fontFamily: "var(--font-secondary)" }}>
        Pagina no encontrada
      </h2>
      <p style={{ fontFamily: "var(--font-tertiary)" }}>
        La página que está buscando podría haber sido eliminada debido a que
        cambió su nombre o no está disponible temporalmente
      </p>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button variant="outlined">Regresar al inicio</Button>
      </Link>
    </div>
  );
};

export default NotFund;
