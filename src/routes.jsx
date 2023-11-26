import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Highlights } from "./pages/Highlights";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Orientations } from "./pages/Orientations";
import { SnackOrientation } from "./pages/SnackOrientation";
import { EntryPayment } from "./pages/EntryPayment";
import { Adm } from "./pages/Adm";
import { Lanches } from "./pages/Cardapio/lanche";
import { Acompanhamentos } from "./pages/Cardapio/acompanhamentos";
import { Bebida } from "./pages/Cardapio/bebida";
import { Cardapio } from "./pages/Cardapio";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/highlights" Component={Highlights} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/orientations/:id" Component={Orientations} />
      <Route path="/snack-orientations" Component={SnackOrientation} />
      <Route path="/entry-payment" Component={EntryPayment} />
      <Route path="/adm" Component={Adm} />
      <Route path="/cardapio" Component={Cardapio} />
      <Route path="/lanches" Component={Lanches} />
      <Route path="/acompanhamentos" Component={Acompanhamentos} />
      <Route path="/bebida" Component={Bebida} />
      <Route path="*" Component={() => <h1>Page not found</h1>} />
    </Routes>
  );
}