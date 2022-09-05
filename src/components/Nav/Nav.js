import CartWidget from "../CartWidget/CartWidget";
import { GiConverseShoe } from "react-icons/gi";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
      <div className="container-fluid">
        <Link to={'/'}className="navbar-brand">
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
              <Link className="nav-link" to={'/'}>
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={'/'}
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
                <li>
                  <Link to={'/brand/Nike'} className="dropdown-item">
                    Nike
                  </Link>
                </li>
                <li>
                  <Link to={'/brand/Air Jordan'} className="dropdown-item">
                    Air Jordan
                  </Link>
                </li>
                <li>
                  <Link to={'/brand/Adidas Yeezy'} className="dropdown-item">
                    Adidas
                  </Link>
                </li>
                <li>
                  <Link to={'/brand/Converse'} className="dropdown-item">
                    Converse
                  </Link>
                </li>
                <li>
                  <Link to={'/brand/New Balance'} className="dropdown-item">
                  New Balance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
                FAQ
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <CartWidget />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
