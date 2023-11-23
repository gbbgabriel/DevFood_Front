import { Input } from "../../components/Input";
import bgHamburguer from "../../assets/images/bg_hamburguer.png";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/login";
import { useRef } from "react";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const useRefEmail = useRef(null);
  const useRefPassword = useRef(null);

  const handleLogin = async () => {
    try {
      const email = useRefEmail.current.value;
      const password = useRefPassword.current.value;      
  
      const loginData = {
        email,
        password,    
      }
  
      const response = await login(loginData);

      localStorage.setItem("@token", response.data.token);
      navigate("/");
    } catch (err) {
      toast.error("Erro ao fazer login");
    }
  }
  
  return (
    <div className="w-screen h-screen flex">
      <div className="container mx-auto flex flex-col items-center py-8">      
        <h1 className="font-bold text-4xl mb-2">Acesse sua conta</h1>        
        <div className="mt-20 w-1/2">
          <form className="py-4 px-2 w-full">
            <Input ref={useRefEmail} classNameWrapper="mb-8" type="email" placeholder="E-mail" />            
            <Input ref={useRefPassword} type="password" placeholder="Senha" afterIcon="Eye" />
            {/* <input ref={useRefConnected} className="mt-8 mr-2" id="connected" type="checkbox" name="connected" /> */}
            {/* <label htmlFor="connected">Matenha-me conectado</label> */}
          </form>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <Button
            onBtnClick={handleLogin} 
            className="mt-8 py-2 mb-4" 
            text="Entrar" 
            type="primary" 
            size="md" 
          />
          <div>Esqueceu a senha? <Link className="text-blue-600 underline" to="/recovery-password">Recupere-a</Link></div>
        </div>
        <div className="text-lg mt-28">
          <p className="text-center mb-4 text-xl">Se ainda não comeu na DevsFood</p>
          <div className="text-center">
            <Link className="text-blue-600 underline" to="/register">cadastre-se</Link>
          </div>
        </div>
      </div>
      <img className="w-[600px] object-cover" src={bgHamburguer} alt="Background hamburguer" />
    </div>
  );
}