/* eslint-disable react/display-name */
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";

export const withSurfaces = (Component) => (props) => {
  return (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  );
}