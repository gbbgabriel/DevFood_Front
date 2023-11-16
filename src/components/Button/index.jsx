import PropTypes from "prop-types";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const buttonStyle = tv({
  base: "font-title px-2 py-1 rounded-md border w-[100px]",
  variants: {
    type: {
      primary: "border-black bg-white text-black",
      secondary: "border-orange--primary bg-orange--primary text-white",
      secondaryBgTransparent: "border-orange--primary bg-transparent text-orange--primary",
    },
    size: {
      sm: "w-[100px]",
      md: "w-[150px]",
      lg: "w-[200px]",
    }
  },
});

export const Button = ({ onBtnClick, text, type, size, className, ...props }) => {
  return (
    <button 
      className={twMerge(buttonStyle({ type, size }), className)} 
      onClick={onBtnClick}
      {...props}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
}