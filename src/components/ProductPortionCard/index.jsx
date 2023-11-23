import PropTypes from "prop-types";

export const ProductPortionCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-2 w-[350px] p-4 shadow-md">
      <span className="font-bold text-xl">{title}:</span>
      <h3 className="font-semibold text-lg">{desc}</h3>      
    </div>
  );
}

ProductPortionCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}