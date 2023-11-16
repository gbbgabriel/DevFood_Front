import cart from "../../../assets/images/icon_cart.png";
import hamburguer from "../../../assets/images/icon_hamburguer.png";
import { Button } from "../../Button";

export const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between">
        <img src={hamburguer} alt="Hamburguer logo" />
        <div>
          <ul className="flex items-center gap-x-12">
            <li>
              <a href="#">Cardapio</a>
            </li>
            <li>
              <a href="#">Novidades</a>
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
          />
          <Button 
            text="Cadastrar"
            type="secondary"
          />          
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <a href="#">
              <img src={cart} alt="Cart icon" />
            </a>
          </div>            
          <div>
            <span className="block">R$ 0,00</span>
            <span>0 itens</span>
          </div>
        </div>
      </div>
    </header>
  );
}