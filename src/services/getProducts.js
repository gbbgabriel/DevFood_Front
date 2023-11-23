export const getProducts = async () => {
  const response = await fetch("http://localhost:8080" + '/product');
  const data = await response.json();
  return data;
}