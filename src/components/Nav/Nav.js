const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://google.com">
          <img src="sneaker.png" alt="sneaker" width="50" height="50" />
          Sneak Sneakers
        </a>
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
              <a className="nav-link" href="https://google.com">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://google.com"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a href="https://google.com" className="dropdown-item">
                    Marca 1
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="dropdown-item">
                    Marca 2
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="dropdown-item">
                    Marca 3
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="dropdown-item">
                    Marca 4
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://google.com">
                    Otras marcas...
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">
                FAQ
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar producto"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
