export const updateCategory = async (id, categoryData) => {
  const response = await fetch(`http://localhost:8080/category/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('@token')
    },
    body: JSON.stringify(categoryData)
  });
  const data = await response.json();
  return data;
}