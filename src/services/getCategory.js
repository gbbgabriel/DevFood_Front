export const getCategory = async (id) => {
  const response = await fetch(`http://localhost:8080/category/${id}`);
  return response.json();
}