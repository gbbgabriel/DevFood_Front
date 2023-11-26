//import { CardNews } from "../../components/CardNews";
import { Category } from "../../components/Category";
import { Main } from "../../components/partials/Main";
import { withSurfaces } from "../../hoc/withSurfaces";

// ... (importações e código existente)

export const HomeComponent = () => {
  return ( 
    <>
      <Main />

      <section id="menu" className="container mx-auto mt-20">
        <a href=""><h2 className="font-bold text-4xl mb-24 text-center">Cardápio</h2></a>
        <div className="flex items-center justify-center gap-4">
          <a href="http://localhost:5173/lanches" className="w-40 h-16" >
            {/* Use as classes de largura e altura do Tailwind para ajustar o tamanho do hambúrguer */}
            <Category
              title="Sanduíches"
              image="https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/512/32382-hamburger-icon.png" // Exemplo: largura e altura de 16 pixels
            />
          </a>
          <a href="http://localhost:5173/acompanhamentos" className="w-40 h-16" >
          <Category title="Acompanhamentos" image="https://cdn.icon-icons.com/icons2/881/PNG/512/French_Fries_icon-icons.com_68745.png" />
          </a>
          <a href="http://localhost:5173/bebida" className="w-40 h-16" >
          <Category title="Bebidas" image="https://cdn-icons-png.flaticon.com/512/920/920551.png" />
          </a>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <section id="news" className="container mx-auto mt-20">
        <div>
          <h2 className="font-bold text-4xl mb-24 text-center">Novidades da Devs Food</h2>
          <div className="flex items-center justify-around">
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </section> */}
    </>
  );
}

export const Home = withSurfaces(HomeComponent);
