export const login = async (data) => {
  const response = await fetch('http://localhost:3000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}