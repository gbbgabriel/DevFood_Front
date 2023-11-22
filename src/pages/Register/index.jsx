import { Input } from "../../components/Input";
import bgHamburguer from "../../assets/images/bg_hamburguer.png";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="container mx-auto flex flex-col items-center py-8">      
        <h1 className="font-bold text-4xl mb-2">Acesse sua conta</h1>        
        <div className="mt-20 w-1/2">
          <form className="py-4 px-2 w-full">
            <Input classNameWrapper="mb-8" type="email" placeholder="Continuar com E-mail" />            
            <Input type="password" placeholder="Senha" afterIcon="Eye" />
            <input className="mt-8 mr-2" id="connected" type="checkbox" name="connected" />
            <label htmlFor="connected">Matenha-me conectado</label>
          </form>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <Button className="mt-8 py-2 mb-4" text="Entrar" type="primary" size="md" />
          <Link className="underline" to="/recovery-password">Esqueceu a senha?</Link>
        </div>
        <div className="text-lg mt-28">
          <p className="text-center mb-4 text-xl">Se ainda não comeu na DevsFood</p>
          <div className="text-center">
            <Link className="underline" to="/register">Cadastra-se</Link>
          </div>
        </div>
      </div>
      <img className="w-[600px] object-cover" src={bgHamburguer} alt="Background hamburguer" />
    </div>
  );
}