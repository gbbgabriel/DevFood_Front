import { withSurfaces } from "../../hoc/withSurfaces";
import banner_food from "../../assets/images/banner_food.png";
import { Button } from "../../components/Button";
import { BUTTONS_DEF_FOODS } from "./helpers";
import { CardNews } from "../../components/CardNews";
import { Main } from "../../components/partials/Main";

const HighlightsComponent = () => {
    return (
      <>
        <Main />

        <div className="container mx-auto flex justify-center">
          <img src={banner_food} alt="Banner food" />
        </div>

        <section className="container mx-auto mt-20">
          <div>
            <div className="flex items-center gap-x-4">
              {BUTTONS_DEF_FOODS.map((button, index) => (
                <Button 
                  key={index}
                  type="secondaryBgTransparent"
                  text={button.text}
                  onBtnClick={() => {}}
                  size="lg"                  
                />
              ))}
            </div>
            <div className="grid grid-cols-3">
                {/* implements requests for get items */}
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20">
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

export const Highlights = withSurfaces(HighlightsComponent);