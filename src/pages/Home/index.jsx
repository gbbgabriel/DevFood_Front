import { CardNews } from "../../components/CardNews";
import { Category } from "../../components/Category";
import { Main } from "../../components/partials/Main";
import { withSurfaces } from "../../hoc/withSurfaces";

export const HomeComponent = () => {
  return ( 
    <>
      <Main />

      <section id="menu" className="container mx-auto mt-20">
        <h2 className="font-bold text-4xl mb-24 text-center">Cardápio</h2>
        <div className="flex items-center justify-center gap-4">
          <Category title="Destaques" image="" />
          <Category title="Sanduíches" image="" />
          <Category title="Acompanhamentos" image="" />
          <Category title="Sobremesas" image="" />
        </div>
      </section>

      <section id="news" className="container mx-auto mt-20">
        <div>
          <h2 className="font-bold text-4xl mb-24 text-center">Novidades da Devs Food</h2>
          <div className="flex items-center justify-around">
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </section>
    </>
  );
}

export const Home = withSurfaces(HomeComponent);