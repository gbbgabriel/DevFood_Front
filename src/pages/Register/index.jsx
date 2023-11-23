import { Input } from "../../components/Input";
import bgHamburguer from "../../assets/images/bg_hamburguer.png";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { createUser } from "../../services/createUser";
import { ToastContainer, toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();
  
  const useRefEmail = useRef(null);
  const useRefPassword = useRef(null);
  const useRefName = useRef(null);
  const useRefNumber = useRef(null);
  const useRefCPF = useRef(null);
  
  const handleCreateUser = async () => {
    try {
      const name = useRefName.current.value;
      const email = useRefEmail.current.value;
      const number = useRefNumber.current.value;
      const cpf = useRefCPF.current.value;
      const password = useRefPassword.current.value;
  
      const user = {
        name,
        email,
        number,
        cpf,
        password
      }
  
      await createUser(user);
      toast.success("Usuário criado com sucesso");
      navigate("/login");
    } catch (err) {
      toast.error("Erro ao criar usuário");
    }

  }

  return (
    <div className="w-screen h-screen flex">
      <ToastContainer />
      <div className="container mx-auto flex flex-col items-center py-8">      
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl mb-2">Registre-se ou faça login em segundos</h1>
          <p className="text-xl">use seu e-mail ou outra conta para entrar na Dev Food</p>          
        </div>      
        <div className="mt-20 w-1/2">
          <form className="flex flex-col py-4 px-2 w-full">
            <Input ref={useRefName} classNameWrapper="mb-8" type="text" placeholder="Nome" />
            <Input ref={useRefEmail} classNameWrapper="mb-8" type="email" placeholder="E-mail" />            
            <Input ref={useRefNumber} classNameWrapper="mb-8" type="text" placeholder="Número" />
            <Input ref={useRefCPF} classNameWrapper="mb-8" type="text" placeholder="CPF" />            
            <Input ref={useRefPassword} type="password" placeholder="Senha" />
            <Button 
              className="self-center mt-10" 
              text="Confirmar" 
              type="primary" 
              size="lg" 
              onBtnClick={handleCreateUser} 
            />
          </form>
          <div className="text-center">Já tem uma conta? <Link className="text-blue-600 underline" to="/login">Entre</Link></div>
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