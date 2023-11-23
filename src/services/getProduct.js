export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:8080/product/${id}`);
  const data = await response.json();
  return data;
}