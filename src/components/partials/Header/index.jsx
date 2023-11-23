import hamburguer from "../../../assets/images/icon_hamburguer.png";
import cartImg from "../../../assets/images/icon_cart.png";
import { Button } from "../../Button";
import { useState } from "react";
import { CartModal } from "../../CartModal";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleOpenCartModal = async () => {
    const response = await fetch("http://localhost:8080/cart")
    const data = await response.json();
    setCart(data);
    setModalCartOpen(!modalCartOpen);
  }

  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between">
        <img src={hamburguer} alt="Hamburguer logo" />
        <div>
          <ul className="flex items-center gap-x-12">
            <li>
              <a href="#menu">Cardapio</a>
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
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <div 
              className="cursor-pointer"
              onClick={handleOpenCartModal}
            >
              <img src={cartImg} alt="Cart icon" />
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
}