import { Additional } from "../../components/Additional";
import bgHamburguerDesenho from "../../assets/images/bg_hamburguer_desenho.png";
import { Button } from "../../components/Button";

export const SnackOrientation = () => {
  return (
    <>
      <div className="w-full justify-center">
        <img className="h-[350px]" width="100%" src={bgHamburguerDesenho} alt="Banner hamburguer" />
      </div>

      <section className="container mx-auto mt-20">        
        <div className="flex flex-wrap items-center gap-4">            
          <Additional title="" price="" quantity={1} />
        </div>
      </section>

      <section className="container mx-auto mt-20 flex flex-col">
        <div>Observação:</div>
        <textarea className="w-full h-40 mt-4 border border-black rounded-md outline-none p-2" placeholder="Ex: quero que retire a cebola do lanche" />
        <div className="flex items-center mt-10">
          <Button size="md" text="Concluir pedido" type="" className="bg-green-600 text-white mr-4" />
          <Button size="md" text="Cancelar pedido" type="" className="bg-red-600 text-white" />
        </div>
      </section>
    </>
  );
}