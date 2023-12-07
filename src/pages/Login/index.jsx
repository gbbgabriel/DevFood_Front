import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const useRefEmail = useRef(null);
  const useRefPassword = useRef(null);

  useEffect(() => {
    const isUserLoggedIn = () => {
      return localStorage.getItem("@token") !== null;
    };

    if (isUserLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const email = useRefEmail.current.value;
      const password = useRefPassword.current.value;

      const loginData = {
        email,
        password,
      };

      const response = await fetch("http://localhost:8080/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      const responseData = await response.json();

      localStorage.setItem("@token", responseData.accessToken);

      toast.success("Login realizado com sucesso");
      navigate("/");
    } catch (err) {
      toast.error("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-screen h-screen flex">
        <div className="container mx-auto flex flex-col items-center py-8">
          <h1 className="font-bold text-4xl mb-2">Acesse sua conta</h1>
          <div className="mt-20 w-1/2">
            <form className="py-4 px-2 w-full">
              <input
                ref={useRefEmail}
                className="w-full p-2 mb-4 border rounded"
                type="email"
                placeholder="E-mail"
              />
              <input
                ref={useRefPassword}
                className="w-full p-2 mb-4 border rounded"
                type="password"
                placeholder="Senha"
              />
            </form>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-2 mb-4 bg-blue-500 text-white rounded cursor-pointer"
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>
            <div>
              Esqueceu a senha?{" "}
              <Link className="text-blue-600 underline" to="/recovery-password">
                Recupere-a
              </Link>
            </div>
          </div>
          <div className="text-lg mt-28">
            <p className="text-center mb-4 text-xl">Se ainda não comeu na DevsFood</p>
            <div className="text-center">
              <Link className="text-blue-600 underline" to="/register">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
