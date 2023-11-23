export const updateProduct = async (id, productData) => {
  const response = await fetch(`http://localhost:8080/product/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('@token')
    },
    body: JSON.stringify(productData)
  });
  const data = await response.json();
  return data;
}