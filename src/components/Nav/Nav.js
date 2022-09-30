import CartWidget from "../CartWidget/CartWidget";
import { GiConverseShoe } from "react-icons/gi";
import { Link } from "react-router-dom";
import TrackerInput from "../TrackerInput/TrackerInput";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useState } from "react";

const Nav = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((res) => res.docs.map((prod) => prod.data().brand))
      .then((brands) => setBrands([...new Set(brands)]))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <nav className="fixed-top bg-light navbar navbar-expand-lg navbar-light border-bottom">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Sneak Sneakers
          <GiConverseShoe />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={"/"}
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                {brands.map((brand) => {
                  return (
                    <li key={brand}>
                      <Link to={`/brand/${brand}`} className="dropdown-item">
                        {brand}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>

          <TrackerInput />

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
