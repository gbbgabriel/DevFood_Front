import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import hamburguer from "../../../assets/images/icon_hamburguer.png";
import cartImg from "../../../assets/images/icon_cart.png";
import { Button } from "../../Button";
import { CartModal } from "../../CartModal";

export const Header = () => {
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
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

  const handleOpenCartModal = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    setCart(data);
    setModalCartOpen(!modalCartOpen);
  };

  const handleEditProducts = () => {
    // Adicione aqui a lógica para navegar para a página de edição de produtos
    // Por exemplo: navigate("/admin/edit-products");
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
          {!isUserLoggedIn() && (
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
          )}
          {isUserLoggedIn() && !isAdmin && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}
          {isAdmin && (
            <button
              onClick={handleEditProducts}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
              Produtos
            </button>
          )}
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <div
              className="cursor-pointer"
              onClick={handleOpenCartModal}
            >
              <img src={cartImg} alt="Ícone do carrinho" />
            </div>
          </div>
          <div>
            <span className="block">R$ 0,00</span>
            <span>0 itens</span>
          </div>
        </div>
      </div>
      {modalCartOpen && cart.length > 0 && (
        <CartModal
          snackName={cart.map((i) => i.name).join(", ")}
          deliveryTax="0.00"
          value={cart.map((i) => i.price).join(", ")}
          subtotal={cart.reduce((pv, cur) => pv.price + cur.price, 0)}
          total={cart.reduce((pv, cur) => pv.price + cur.price, 0)}
        />
      )}
    </header>
  );
};
