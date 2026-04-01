import { Link } from "react-router";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="monospace">Lab <span className="text-white bg-primary px-2 py-1 rounded">Pay</span></span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sucesso">
                Sucesso
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/error">
                Error
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
