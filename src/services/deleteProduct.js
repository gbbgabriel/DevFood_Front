export const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:8080/product/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('@token')
    }    
  });
  return response.json();
}