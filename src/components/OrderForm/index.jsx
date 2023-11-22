import { Button } from "../Button";
import PropTypes from "prop-types";

export const OrderForm = ({ name, value, obs, subTotal, deliveryTax, total }) => {
  return (
    <div className="p-4 bg-white rounded-sm shadow-md flex flex-col">
      <h4>Seu pedido em</h4>
      <div>
        <span>{name}</span>
        <span>{value}</span>
      </div>
      <span>OBS: {obs}</span>
      <div>
        <Button type="primary" size="md" text="Editar pedido" />
        <Button type="primary" size="md" text="Cancelar pedido" />
      </div>
      <hr />
      <Button className="bg-orange-500 text-white" type="" size="lg" text="Cupom" />
      <hr />
      <div>
        <span>Sub total / valor do produto</span>
        <span>{subTotal}</span>
      </div>
      <div>
        <span>Taxa de entrega</span>
        <span>{deliveryTax}</span>
      </div>    
      <hr />
      <div>
        <h3>Total</h3>
        <span>{total}</span>
      </div>
    </div>
  );
}

OrderForm.propTypes = {
  name: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired, 
  obs: PropTypes.string.isRequired, 
  subTotal: PropTypes.string.isRequired, 
  deliveryTax: PropTypes.string.isRequired, 
  total: PropTypes.string.isRequired
}