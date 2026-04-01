import { Outlet } from "react-router";
import { NavBar } from "../navbar";

export function LayoutPadrao() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
