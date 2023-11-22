import { Input } from "../../components/Input";
import bgHamburguer from "../../assets/images/bg_hamburguer.png";

export const Login = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="container mx-auto flex flex-col items-center py-8">      
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl mb-2">Faça login ou registre-se em segundos</h1>
          <p className="text-xl">use seu e-mail ou outra conta para entrar na Dev Food</p>
          {/* Space for google card */}
        </div>
        <div className="flex mt-20 w-full items-center">
          <div className="bg-orange--primary w-full h-1"></div>
          <span className="font-bold mx-20">Ou</span>
          <div className="bg-orange--primary w-full h-1"></div>
        </div>
        <div className="mt-20 w-1/2">
          <form className="py-4 px-2 w-full">
            <Input classNameWrapper="mb-8" type="email" placeholder="Continuar com E-mail" />            
            <Input type="password" placeholder="Senha" />
          </form>
        </div>
        <div className="text-lg mt-28">
          <p className="font-semibold">Ao continuar, você concorda com os termos de Uso Leia nossa Politica de Privacidade</p>
          <p className="mt-4">* Registre-se com o seu melhor e-mail !</p>
        </div>
      </div>
      <img className="w-[600px] object-cover" src={bgHamburguer} alt="Background hamburguer" />
    </div>
  );
}