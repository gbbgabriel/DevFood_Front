import PropTypes from "prop-types";
import { Button } from "../Button";
import shoppingIcon from "../../assets/images/icon_shopping.png";
import hamburguer from "../../assets/images/hamburguer.png";

export const CardFood = ({ title, price, onCardClick, onAddCardToCartClick }) => {
  return (
    <div className="py-2 px-4 pb-8 rounded-lg shadow-md flex flex-col items-center">
      <img src={hamburguer} alt={title} />
      <h2 className="mt-10 mb-4 text-red font-bold text-2xl font-hamburguerTitle">{title}</h2> 
      <span className="mb-10 font-semibold text-xl">R$ {price}</span>
      <div className="flex items-center justify-center">
        <div 
          className="p-2 bg-orange--primary text-white rounded-md mr-36 cursor-pointer"
          onClick={onAddCardToCartClick}
        >
          <img src={shoppingIcon} alt="Shopping" />
        </div>
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
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onAddCardToCartClick: PropTypes.func.isRequired,
}