import { useNavigate, useParams } from "react-router";

export function ProdutoPage() {
  const { idProduto } = useParams();
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-span-6">
          <h1>Meu produto - id: {idProduto}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            dolor? Veniam similique explicabo, dolore architecto natus non
            perspiciatis, exercitationem officia, commodi consequatur porro
            sint! Deleniti fugiat quibusdam soluta asperiores libero?
          </p>
          <button className="btn btn-link" onClick={goBack}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
