import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";

// Componente de Pedido
const Order = ({ order, onRemoveOrComplete }) => {
  const navigate = useNavigate();

  const handleRemoveOrder = () => {
    onRemoveOrComplete(order.id);
  };

  const handleViewOrder = () => {
    navigate(`/order/${order.id}`);
  };

  return (
    <div className="border p-4 mb-4 flex justify-between items-center">
      <div>
        <p>ID: {order.id}</p>
        <p>Data: {order.date}</p>
        <p>Produtos: {order.amountProducts || 0}</p>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={handleViewOrder}>
          Ver Pedido
        </button>
        <button className="bg-red-500 text-white px-4 py-2 mr-2" onClick={handleRemoveOrder}>
          Excluir ou Concluir
        </button>
      </div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    amountProducts: PropTypes.number,
  }).isRequired,
  onRemoveOrComplete: PropTypes.func.isRequired,
};

// Tela de Pedidos
export const OrdersScreen = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (token) {
      fetch("http://localhost:8080/order/all", {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setOrderList(data))
        .catch((error) => console.error("Erro ao obter as ordens:", error));
    }
  }, []);

  const handleRemoveOrder = async (orderId) => {
    const token = localStorage.getItem("@token");

    if (token) {
      try {
        const response = await fetch(`http://localhost:8080/order/${orderId}`, {
          method: "DELETE",
          headers: {
            Authorization: `${token}`,
          },
        });

        if (!response.ok) {
          console.error(`Erro ao excluir pedido ${orderId}: ${response.status}`);
          return;
        }

        const updatedOrders = orderList.filter((order) => order.id !== orderId);
        setOrderList(updatedOrders);
      } catch (error) {
        console.error("Erro ao excluir pedido:", error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="font-bold text-4xl mb-4 text-center">Pedidos</h2>
      <div>
        {orderList.map((order) => (
          <div key={order.id} className="mb-4">
            <Order order={order} onRemoveOrComplete={handleRemoveOrder} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Tela Home
export const OrderComponent = () => {
  return (
    <>
      <Header />
      <OrdersScreen />
      <Footer />
    </>
  );
};
