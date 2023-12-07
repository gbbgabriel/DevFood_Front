import { useEffect, useState } from "react";
import { withSurfaces } from "../../hoc/withSurfaces";

const CartComponent = () => {
  const [cart, setCart] = useState({});
  const [tableNumber, setTableNumber] = useState('');
  const [orderDescription, setOrderDescription] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("@token");
        const response = await fetch("http://localhost:8080/cart", {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching cart: ${response.status}`);
        }

        const cartData = await response.json();
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveProduct = async (productId) => {
    try {
      const token = localStorage.getItem("@token");
      await fetch(`http://localhost:8080/cart/product/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`,
        },
      });
      const updatedCart = await fetch("http://localhost:8080/cart", {
        headers: {
          Authorization: `${token}`,
        },
      }).then(response => response.json());
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleClearCart = async () => {
    try {
      const token = localStorage.getItem("@token");
      await fetch("http://localhost:8080/cart", {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`,
        },
      });
      setCart({});
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      const token = localStorage.getItem("@token");
      await fetch(`http://localhost:8080/cart/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({ amount: newQuantity }),
      });
      const updatedCart = await fetch("http://localhost:8080/cart", {
        headers: {
          Authorization: `${token}`,
        },
      }).then(response => response.json());
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const mesaNumber = parseInt(tableNumber, 10);
      const token = localStorage.getItem("@token");
      const response = await fetch("http://localhost:8080/order", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          num_mesa: mesaNumber,
          amountPayments: 999999,  // Valor padrão
          description: orderDescription,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error placing order: ${response.status}`);
      }

      // Limpar o carrinho após fazer o pedido bem-sucedido
      setCart({});
      setTableNumber('');
      setOrderDescription('');
      setOrderPlaced(true);

      // Resetar a mensagem de confirmação após alguns segundos
      setTimeout(() => {
        setOrderPlaced(false);
      }, 3000);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const calculateTotal = () => {
    if (!cart.cartProduct) {
      return 0;
    }

    return cart.cartProduct.reduce((total, cartProduct) => {
      return total + cartProduct.product.price * cartProduct.amount;
    }, 0);
  };

  return (
    <>
      {/* Header */}
      <header>
        {/* ... your header component ... */}
      </header>

      {/* Cart Content */}
      <section className="container mx-auto mt-20">
        {/* Adicione os campos para o número da mesa e descrição */}
        <div className="mb-4">
          <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700">
            Número da mesa:
          </label>
          <input
            type="text"
            id="tableNumber"
            name="tableNumber"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Ex: 1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="orderDescription" className="block text-sm font-medium text-gray-700">
            Observações:
          </label>
          <textarea
            id="orderDescription"
            name="orderDescription"
            value={orderDescription}
            onChange={(e) => setOrderDescription(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Ex: Sem cebola, sem maionese"
          />
        </div>

        <div className="grid grid-cols-4 gap-x-4 mt-4">
          {cart.cartProduct && cart.cartProduct.map((cartProduct, index) => (
            <div key={index} className="border p-4">
              <img src={cartProduct.product.image} alt={cartProduct.product.name} className="mb-4" />
              <h3 className="text-lg font-bold">{cartProduct.product.name}</h3>
              <p>{cartProduct.product.description}</p>
              <p>Price: ${cartProduct.product.price}</p>
              <p>Quantity: {cartProduct.amount}</p>
              <div className="flex gap-x-2 mt-4">
                <button onClick={() => handleRemoveProduct(cartProduct.product.id)} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
                <input
                  type="number"
                  min="1"
                  value={cartProduct.amount}
                  onChange={(e) => handleUpdateQuantity(cartProduct.product.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cart Actions */}
        <div className="flex justify-end mt-8">
          <button onClick={handleClearCart} className="bg-red-500 text-white px-4 py-2 rounded">
            Clear Cart
          </button>
          {/* Adicione o botão para fazer o pedido */}
          <button onClick={handlePlaceOrder} className="bg-green-500 text-white px-4 py-2 rounded ml-4">
            Place Order
          </button>
        </div>

        {/* Exibição do valor total */}
        <div className="flex justify-end mt-8">
          <p className="text-xl font-bold">Total: R$ {calculateTotal().toFixed(2)}</p>
        </div>

        {/* Exiba a mensagem de confirmação se o pedido for feito com sucesso */}
        {orderPlaced && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
            Order placed successfully! Thank you for your order.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer>
        {/* ... your footer component ... */}
      </footer>
    </>
  );
};

export const Cart = withSurfaces(CartComponent);
