import PropTypes from 'prop-types';

export const Additional = ({ title, quantity, price }) => {
  return (
    <div className="p-4 border-b border-b-gray-400 flex flex-col mb-8">
      <h3 className="font-bold text-lg">{title}</h3>
      <div>
        <span>R$ {price}</span>
        <div className="flex items-center justify-between">
          <button>-</button>
          <div>{quantity}</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

Additional.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}