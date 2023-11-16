import PropTypes from 'prop-types';

export const Category = ({ title, image }) => {
  return (
    <div className="px-2 py-4 flex flex-col items-center shadow-md">
      <h4 className="font-semibold">{title}</h4>
      <img src={image} alt={title} />
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}