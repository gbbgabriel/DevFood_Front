export const addCart = async (productId, amount) => {
  const response = await fetch('http://localhost:3000/cart', {
    method: "POST",
    body: JSON.stringify({
      productId,
      amount
    }),
    headers: {
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('@token')
    }
  });
  const cart = await response.json();
  return cart;
}