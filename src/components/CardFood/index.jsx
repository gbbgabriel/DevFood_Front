import PropTypes from "prop-types";
import { Button } from "../Button";
import shoppingIcon from "../../assets/images/icon_shopping.png";
import { jwtDecode } from "jwt-decode";

export const CardFood = ({ title, price, onCardClick, image, onAddCardToCartClick, onDeleteClick }) => {
  const token = localStorage.getItem("@token");
  let userType = 0; // Assume userType como 0 (usuário não autenticado)

  // Verifica se há um token e decodifica para obter o typeUser
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userType = decodedToken.typeUser || 0; // Se typeUser não estiver presente, assume 0
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
    }
  }

  return (
    <div className="py-2 px-4 pb-8 rounded-lg shadow-md max-w-sm">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="max-h-52" />
        <h2 className="mt-10 mb-4 text-red font-bold text-2xl font-hamburguerTitle">{title}</h2> 
        <span className="mb-10 font-semibold text-xl">R$ {price}</span>
      </div>
      <div className="flex items-center justify-center mt-auto">
        <div 
          className="p-2 bg-orange--primary text-white rounded-md mr-4 cursor-pointer"
          onClick={onAddCardToCartClick}
        >
          <img src={shoppingIcon} alt="Shopping" />
        </div>
        {/* Verifica se o usuário está logado (token presente) e userType é diferente de 1 (usuário comum) */}
        {token && userType !== 1 && (
          <div 
            className="p-2 bg-red-500 text-white rounded-md mr-4 cursor-pointer"
            onClick={onDeleteClick}
          >
            Excluir
          </div>
        )}
        <Button 
          size="md"
          className="py-2"
          type="secondary"
          text="Veja mais"
          onBtnClick={onCardClick}
        />
      </div>
    </div>
  );
}

CardFood.propTypes = {  
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onAddCardToCartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
