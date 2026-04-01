import { createBrowserRouter } from "react-router";
import { LayoutPadrao } from "../components/layouts/layout-padrao";
import { CheckoutPagina } from "../pages/checkout";
import { SucessoPagina } from "../pages/sucesso";
import { ErrorPagina } from "../pages/error";
import { NaoEncontradoPagina } from "../pages/nao-encontrado";
import { ProdutoPage } from "../pages/produto";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPadrao />,
    children: [
      {
        path: "/",
        element: <CheckoutPagina />,
      },
      {
        path: "/sucesso",
        element: <SucessoPagina />,
      },
      {
        path: "/error",
        element: <ErrorPagina />,
      },
      {
        path: "/produto/:idProduto",
        element: <ProdutoPage />,
      },
      {
        path: "*",
        element: <NaoEncontradoPagina />,
      },
    ],
  },
]);
