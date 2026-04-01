import { useState } from "react";
import { Link } from "react-router";

export function CheckoutPagina() {
  const [isLoading, setIsLoading] = useState(false);

  async function processCheckout() {
    setIsLoading(true);
    const response = await fetch("/.netlify/functions/checkout", {
      method: "POST",
    });

    const data = await response.json();

    setIsLoading(false);

    window.location.href = data.url;
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3">Pagamento com Stripe</h1>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>

          <div className="card shadow-sm p-4">
            <h5 className="mb-3">Resumo do pedido</h5>
            <ul className="list-unstyled mb-3">
              <li>Servico premium</li>
              <li>Atendimento prioritario</li>
              <li>Suporte especializado</li>
            </ul>
            <hr />
            <h3 className="fw-bold mb-4">R$ 50,00</h3>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary btn-lg"
                onClick={processCheckout}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">
                      Processando checkout...
                    </span>
                  </div>
                ) : (
                  "Efetuar pagamento"
                )}
              </button>
              {/* <Link to="/error" className="btn btn-outline-danger">
                Simular erro
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_920396-MLA74177098325_012024-O.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Caneta Pencil Para iPad 10 Geração Com Ponta Fina 1,5mm
              </h5>
              <p className="card-text">
                O Lápis Stylus Pen para iOS e Android é um acessório que permite
                que você desenhe, escreva e faça anotações na tela do seu
                dispositivo com precisão e sensibilidade à pressão.
              </p>
              <Link to="/produto/123456" className="btn btn-primary">
                Ver produto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
