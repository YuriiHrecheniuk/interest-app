export const getPosts = async (userId) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    headers: {
      'Authorization': userId,
    },
  })

  return response.json()
}