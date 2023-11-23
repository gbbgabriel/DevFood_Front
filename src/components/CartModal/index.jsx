import { Button } from "../Button";
import PropTypes from "prop-types";

export const CartModal = ({ snackName, value, subtotal, deliveryTax, total }) => {
  return (
    <div className="absolute top-15 right-0 z-99 px-2 pb-4 shadow-md rounded-sm bg-white">
      <span className="text-l mb-10">Seu pedido em</span>
      <div className="flex items-center mb-10">
        <span>{snackName}</span>
        <span>{value}</span>
      </div>
      <div className="mb-10">OBS:</div>
      <div className="mb-5 flex items-center gap-x-2">
        <Button size="md" text="Editar pedido" type="primary" />
        <Button size="md" text="Cancelar pedido" type="primary" />
      </div>
      <hr />
      <Button 
        size="lg" 
        text="Cupom" 
        className="bg-orange--primary text-white mt-5 mb-5" 
      />
      <hr />
      <div className="flex justify-between mt-5 mb-5">
        <span>Sub total / valor do produto</span>
        <span>{subtotal}</span>
      </div>
      <div className="flex justify-between mb-5">
        <span>Taxa de entrega</span>
        <span>{deliveryTax}</span>
      </div>
      <hr />
      <div className="mt-20 mb-2">
        <span className="text-xl">Total</span>
        <span>{total}</span>
      </div>
      <Button size="lg" text="Formas de pagamento" className="bg-orange--primary text-white" />
    </div>
  );
}

CartModal.propTypes = {
  snackName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  subtotal: PropTypes.string.isRequired,
  deliveryTax: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
}