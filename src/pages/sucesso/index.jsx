import { Link } from "react-router";

export function SucessoPagina() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="alert alert-success shadow-sm" role="alert">
            <h1 className="h2 mb-3">Pagamento realizado com sucesso</h1>
            <p className="mb-0">
              Seu pedido foi confirmado e ja esta em processamento.
            </p>
          </div>
          <Link to="/" className="btn btn-primary">
            Voltar para checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
