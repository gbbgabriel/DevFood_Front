import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Highlights } from "./pages/Highlights";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/highlights" Component={Highlights} />
    </Routes>
  );
}