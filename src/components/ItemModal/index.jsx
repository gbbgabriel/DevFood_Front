import PropTypes from "prop-types";
import { Button } from "../Button";
import { useEffect, useState } from "react";

const translateFields = {
  "id": "ID",
  "name": "Nome",
  "description": "Descrição",
  "price": "Preço",
  "category": "Categoria",
  "image": "Imagem",
  "status": "Status",
  "createdAt": "Criado em",
  "updatedAt": "Atualizado em",
}

export const ItemModal = ({ data, handleSaveUpdate, dispatch, type }) => {
  const [typeItem, setTypeItem] = useState(null);

  useEffect(() => {
    setTypeItem(type);
  }, [type])

  if (typeof data !== "object") {
    return null;
  }


  return (
    <div className="z-999 absolute top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,.2)]">
      <div className="p-4 bg-white shadow-lg rounded-md">
        <form className="w-full h-full">
          {Object.entries(data).map(([key, value]) => (
            <div className="flex flex-col mb-4" key={key}>
              <label className="mb-2" htmlFor={key}>{key in translateFields && translateFields[key]}</label>
              <input onChange={(e) => dispatch({ type: key === "name" ? `${typeItem}_id` : key, payload: e.target.value })} className="border border-gray-300 rounded-md py-2 px-4" id={key} type="text" defaultValue={value} />
            </div>
          ))}
          <Button type="primary" size="lg" text="Salvar" onBtnClick={handleSaveUpdate} />
        </form>
      </div>
    </div>
  );
}
ItemModal.propTypes = {
  data: PropTypes.object.isRequired,
  handleSaveUpdate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}