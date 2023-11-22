import bgHamburguerDesenho from "../../assets/images/bg_hamburguer_desenho.png";
import { Button } from "../../components/Button";
import { CardNews } from "../../components/CardNews";
import { ProductPortionCard } from "../../components/ProductPortionCard";
import { withSurfaces } from "../../hoc/withSurfaces";
import { INGREDIENTS_BUTTONS_DEF } from "./helpers";

export const OrientationsComponent = () => {
  return (
    <>
      <div className="w-full justify-center">
        <img className="h-[350px]" width="100%" src={bgHamburguerDesenho} alt="Banner hamburguer" />
      </div>

      <section className="container mx-auto mt-20 flex items-center">
        <div>
          <h3 className="font-bold text-lg mb-8">Ingredientes</h3>
          <div className="flex flex-wrap items-center gap-4">            
            {INGREDIENTS_BUTTONS_DEF.map((text, index) => (
              <Button 
                key={index}
                type="secondaryBgTransparent"
                text={text}
                onBtnClick={() => {}}
                size="lg"                  
              />
            ))}
          </div>
          <h3 className="font-bold text-lg mb-8 mt-20">Alergênicos</h3>
          <div className="flex flex-wrap items-center gap-4">            
            {INGREDIENTS_BUTTONS_DEF.map((text, index) => (
              <Button 
                key={index}
                type="secondaryBgTransparent"
                text={text}
                onBtnClick={() => {}}
                size="lg"                  
              />
            ))}
          </div>          
        </div>
        <div className="flex flex-col">
          <ProductPortionCard title="Kcal/Porção" quantity="509/241" percentage="25%" />
          <ProductPortionCard title="Carboidrato" quantity="38 g" percentage="13%" />
          <ProductPortionCard title="Sódio" quantity="858 mg" percentage="36%" />
        </div>
      </section>

      <section className="container mx-auto mt-20">
        <div>
          <h2 className="font-bold text-4xl mb-24 text-center">Veja outras opções</h2>
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

export const Orientations = withSurfaces(OrientationsComponent);