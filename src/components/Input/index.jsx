import PropTypes from "prop-types";
import { icons } from 'lucide-react';
import { twMerge } from "tailwind-merge";

export const Input = ({ beforeIcon, afterIcon, classNameWrapper, ...props }) => {
  const LucideBeforeIcon = beforeIcon && icons[beforeIcon];
  const LucideAfterIcon = afterIcon && icons[afterIcon];

  return (
    <div className={twMerge("w-full flex items-center rounded-lg shadow-lg px-2 py-4 outline-none border border-gray-200", classNameWrapper)}>
      {LucideBeforeIcon && <LucideBeforeIcon className="inline-block mr-2" size={24} />}
      <input className="outline-none w-full" {...props} />
      {LucideAfterIcon && <LucideAfterIcon className="inline-block ml-2 cursor-pointer" size={24} />}
    </div>
  );
}

Input.propTypes = {
  beforeIcon: PropTypes.element,
  afterIcon: PropTypes.element,
  classNameWrapper: PropTypes.string,
}