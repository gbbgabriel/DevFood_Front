import { Button } from "../../Button";
import image from "../../../assets/images/foods.png";

export const Main = () => {
  return (
    <main className="container mx-auto">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="mb-6 font-title font-bold text-4xl">WIREBURGUER</h2>
          <p className="mb-4 leading-6 font-text">
            é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de
          </p>              
          <Button 
            type="primary"
            text="Saiba mais"
            onBtnClick={() => {}}
            size="lg"
            className="py-2 px-4"
          />
        </div>            
        <img src={image} alt="Foods image" />
      </div>
    </main>
  );
}