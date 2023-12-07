import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";

const OrderDetailsScreen = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      console.error("Token não encontrado. Trate conforme necessário.");
      return;
    }

    // Verificar se id é válido antes de fazer a requisição
    if (!id) {
      console.error("ID do pedido inválido.");
      return;
    }

    fetch(`http://localhost:8080/order/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setOrderDetails(data))
      .catch((error) => console.error("Erro ao obter detalhes do pedido:", error));
  }, [id]);

  if (!orderDetails) {
    return <p style={{ textAlign: "center" }}>Carregando...</p>;
  }

  const containerStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const textStyle = {
    marginBottom: "10px",
  };

  const renderProducts = () => {
    if (!orderDetails.ordersProduct || orderDetails.ordersProduct.length === 0) {
      return <p>Nenhum produto encontrado.</p>;
    }

    return (
      <>
        <h3 style={titleStyle}>Produtos</h3>
        <ul>
          {orderDetails.ordersProduct.map((orderProduct) => (
            <li key={orderProduct.id}>
              {orderProduct.product.name} - Quantidade: {orderProduct.amount} - Preço: {orderProduct.price}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h2 style={titleStyle}>Detalhes do Pedido</h2>
        {orderDetails && (
          <>
            <p style={textStyle}>
              <strong>ID do Pedido:</strong> {orderDetails.id}
            </p>
            <p style={textStyle}>
              <strong>Data do Pedido:</strong> {new Date(orderDetails.date).toLocaleString()}
            </p>
            {orderDetails.user && (
              <>
                <p style={textStyle}>
                  <strong>Usuário:</strong> {orderDetails.user.name}
                </p>
                <p style={textStyle}>
                  <strong>Email:</strong> {orderDetails.user.email}
                </p>
                <p style={textStyle}>
                  <strong>Telefone:</strong> {orderDetails.user.phone}
                </p>
                <p style={textStyle}>
                  <strong>CPF:</strong> {orderDetails.user.cpf}
                </p>
              </>
            )}
            {/* Exibindo num_mesa e description */}
            <p style={textStyle}>
              <strong>Número da Mesa:</strong> {orderDetails.num_mesa}
            </p>
            <p style={textStyle}>
              <strong>Descrição:</strong> {orderDetails.description}
            </p>
            {renderProducts()}
            <p style={textStyle}>
              <strong>Total:</strong> R$ {orderDetails.payment?.finalPrice || 0}
            </p>
            <p style={textStyle}>
              <strong>Status do Pagamento:</strong> {orderDetails.payment?.paymentStatus?.name || "Desconhecido"}
            </p>
            <Link to="/order">
              <button style={buttonStyle}>Voltar para Pedidos</button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrderDetailsScreen;
