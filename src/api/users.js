export const getUser = async (userId) => {
  const response = await fetch(`http://localhost:3000/users/${userId}`)

  return response.json()
}