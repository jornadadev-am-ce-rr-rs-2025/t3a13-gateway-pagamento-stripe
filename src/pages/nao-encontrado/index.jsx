import { Link } from "react-router";

export function NaoEncontradoPagina() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <h1 className="display-5 fw-bold">404</h1>
          <p className="text-muted mb-4">Pagina nao encontrada.</p>
          <Link to="/" className="btn btn-dark">
            Ir para checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
