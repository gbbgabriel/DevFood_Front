export const getCategories = async () => {
  const response = await fetch("http://localhost:8080/category", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("@token")
    },
  });
  return response.json();
}