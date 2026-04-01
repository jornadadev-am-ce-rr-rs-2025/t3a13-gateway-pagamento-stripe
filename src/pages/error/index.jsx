import { Link } from "react-router";

export function ErrorPagina() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="alert alert-danger shadow-sm" role="alert">
            <h1 className="h2 mb-3">Nao foi possivel concluir o pagamento</h1>
            <p className="mb-0">
              Ocorreu um problema no processamento. Tente novamente em instantes.
            </p>
          </div>
          <Link to="/" className="btn btn-outline-primary">
            Tentar novamente
          </Link>
        </div>
      </div>
    </section>
  );
}
