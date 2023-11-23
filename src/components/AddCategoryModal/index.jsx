import { Button } from "../Button";
import PropTypes from "prop-types";

export const AddCategoryModal = ({ handleSaveAddCategory, setCategory }) => {
  return (
    <div className="z-999 absolute top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,.2)]">
      <div className="p-4 bg-white shadow-lg rounded-md">
        <form className="w-full h-full">
          <label className="mb-2" htmlFor="name">Nome</label>
          <input onChange={(e) => setCategory(prevState => ({ ...prevState, name: e.target.value }))} className="border border-gray-300 rounded-md py-2 px-4" id="name" type="text" />
          <Button type="primary" size="lg" text="Salvar" onBtnClick={handleSaveAddCategory} />
        </form>
      </div>
    </div>
  );
}

AddCategoryModal.propTypes = {
  handleSaveAddCategory: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
}