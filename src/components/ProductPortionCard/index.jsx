import PropTypes from "prop-types";

export const ProductPortionCard = ({ title, quantity, percentage }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-2 w-[350px] p-4 shadow-md">
      <span className="font-bold text-lg">{title}</span>
      <h3 className="font-bold text-xl">{quantity}</h3>
      <span className="font-bold">{percentage}</span>
    </div>
  );
}

ProductPortionCard.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
}