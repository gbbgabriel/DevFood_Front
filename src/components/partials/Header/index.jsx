import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import hamburguer from "../../../assets/images/icon_hamburguer.png";
import cartImg from "../../../assets/images/icon_cart.png";
import { Button } from "../../Button";

export const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const decodeToken = () => {
      const token = localStorage.getItem("@token");

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          setIsAdmin(decodedToken.typeUser === 2);
        } catch (error) {
          console.error("Erro ao decodificar o token:", error);
        }
      }
    };

    decodeToken();
  }, []);

  const isUserLoggedIn = () => {
    return localStorage.getItem("@token") !== null;
  };

  const handleLogout = () => {
    localStorage.removeItem("@token");
    navigate("/login");
  };

  const handleOpenCartPage = async () => {
    const token = localStorage.getItem("@token");

    if (!token) {
      console.error("Token não encontrado. Usuário não autenticado.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      if (!response.ok) {
        console.error(`Erro na solicitação: ${response.status}`);
        return;
      }

      navigate("/cart");
    } catch (error) {
      console.error('Erro ao abrir a página do carrinho:', error);
    }
  };

  const handleEditProducts = () => {
    navigate("/products");
  };

  const handleViewOrders = () => {
    navigate("/order");
  };

  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between">
        <a href="http://localhost:5173/">
          <img src={hamburguer} alt="Hamburguer logo" />
        </a>
        <div>
          <ul className="flex items-center gap-x-12">
            <li>
              <a href="http://localhost:5173/highlights">Cardápio</a>
            </li>
            <li>
              <a href="#news">Novidades</a>
            </li>
            <li>
              <a href="#">Onde tem Devs</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>

          </ul>
        </div>
        <div>
          {!isUserLoggedIn() ? (
            <>
              <Button
                text="Entrar"
                type="primary"
                className="mr-2"
                onBtnClick={() => navigate("/login")}
              />
              <Button
                text="Cadastrar"
                type="secondary"
                onBtnClick={() => navigate("/register")}
              />
            </>
          ) : (
            <>
              {!isAdmin && (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Logout
                </button>
              )}
              {isAdmin && (
                <>
                  <button
                    onClick={handleEditProducts}
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                  >
                    Produtos
                  </button>
                  
                  <button
                  className="bg-green-500 text-white px-4 py-2 rounded highlight ml-2"
                  onClick={handleViewOrders}
                >
                  Pedidos
                </button>

                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  >
                    Logout
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <div
              className="cursor-pointer"
              onClick={handleOpenCartPage}
            >
              <img src={cartImg} alt="Ícone do carrinho" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
