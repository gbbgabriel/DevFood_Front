import PropTypes from "prop-types";
import { Button } from "../Button";
import shoppingIcon from "../../assets/images/icon_shopping.png";

export const CardFood = ({ image, title, desc, onCardClick, onAddCardToCartClick }) => {
  return (
    <div className="py-2 px-4 rounded-lg shadow-md">
      <img src={image} alt={title} />
      <h2 className="text-red font-bold text-xl font-hamburguerTitle">{title}</h2>
      <p className="font-text">{desc}</p>
      <div>
        <button 
          className="bg-orange--primary text-white rounded-md"
          onClick={onAddCardToCartClick}
        >
          <img src={shoppingIcon} alt="Shopping" />
        </button>
        <Button 
          size="md"
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
  desc: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onAddCardToCartClick: PropTypes.func.isRequired,
}