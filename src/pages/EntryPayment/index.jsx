import { Button } from "../../components/Button";
import { OrderForm } from "../../components/OrderForm";

export const EntryPayment = () => {
  return (
    <>
      <section className="container mx-auto mt-20 flex items-center justify-between">        
        <div className="flex flex-col">
          <div>
            <h3 className="font-bold text-xl">Finalização do pedido</h3>
            <div className="flex items-center gap-x-2">
              <Button type="primary" size="lg" text="Adicionar endereço" />
              <Button type="primary" size="md" text="Escolher" />
            </div>
          </div>
          <div className="mt-10 mb-20">
            <h3 className="font-bold text-xl">Formas de pagamento</h3>
            <div className="flex items-center gap-x-2">
              <a className="border-none text-gray-400 text-left cursor-pointer" >Adicionar endereço</a>
              <a className="border-none text-gray-400 text-left ml-4 cursor-pointer">Escolher</a>
            </div>
          </div>
          <Button text="Pague com pix" type="" size="lg" className="border border-gray-300" />
        </div>
        <div>
          <OrderForm />
        </div>
      </section>      
    </>
  );
}