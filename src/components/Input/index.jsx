import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { icons } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export const Input = forwardRef(({ beforeIcon, afterIcon, classNameWrapper, ...props }, ref) => {
  const LucideBeforeIcon = beforeIcon && icons[beforeIcon];
  const LucideAfterIcon = afterIcon && icons[afterIcon];

  return (
    <div className={twMerge("w-full flex items-center rounded-lg shadow-lg px-2 py-4 outline-none border border-gray-200", classNameWrapper)}>
      {LucideBeforeIcon && <LucideBeforeIcon className="inline-block mr-2" size={24} />}
      <input ref={ref} className="outline-none w-full" {...props} />
      {LucideAfterIcon && <LucideAfterIcon className="inline-block ml-2 cursor-pointer" size={24} />}
    </div>
  );
});

Input.propTypes = {
  beforeIcon: PropTypes.string,
  afterIcon: PropTypes.string,
  classNameWrapper: PropTypes.string,
};

// Adicione a propriedade displayName
Input.displayName = 'Input';

