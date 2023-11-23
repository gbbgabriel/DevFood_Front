export const deleteCategory = async (id) => {
  const response = await fetch(`http://localhost:8080/category/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('@token')
    }    
  });
  return response.json();
}