import { Button } from "../Button";
import PropTypes from "prop-types";

export const AddProductModal = ({ handleSaveAddProduct, setProduct }) => {
  return (
    <div className="z-999 absolute top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,.2)]">
      <div className="p-4 bg-white shadow-lg rounded-md">
        <form className="w-full h-full">
          <label className="mb-2" htmlFor="category_id">ID da categoria</label>
          <input onChange={(e) => setProduct(prevState => ({ ...prevState, categoryId: e.target.value }))} className="border border-gray-300 rounded-md py-2 px-4" id="category_id" type="text" />
          <label className="mb-2" htmlFor="name">Nome</label>
          <input onChange={(e) => setProduct(prevState => ({ ...prevState, name: e.target.value }))} className="border border-gray-300 rounded-md py-2 px-4" id="name" type="text" />
          <label className="mb-2" htmlFor="price">Price</label>
          <input onChange={(e) => setProduct(prevState => ({ ...prevState, price: e.target.value }))} className="border border-gray-300 rounded-md py-2 px-4" id="price" type="text" />
          <label className="mb-2" htmlFor="image">Image</label>
          <input onChange={(e) => setProduct(prevState => ({ ...prevState, image: e.target.value }))} className="border border-gray-300 rounded-md py-2 px-4" id="image" type="text" />

          <Button type="primary" size="lg" text="Salvar" onBtnClick={handleSaveAddProduct} />
        </form>
      </div>
    </div>
  );
}

AddProductModal.propTypes = {
  handleSaveAddProduct: PropTypes.func.isRequired,
  setProduct: PropTypes.func.isRequired,
}