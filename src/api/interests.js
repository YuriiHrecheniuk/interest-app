export const getInterests = async (userId) => {
  const response = await fetch('http://localhost:3000/interests', {
    headers: {
      'Authorization': userId,
    },
  })

  return response.json()
}

export const createInterest = async (userId, data) => {
  const response = await fetch('http://localhost:3000/interests', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Authorization': userId,
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export const updateInterest = async (userId, interestId, data) => {
  const response = await fetch(`http://localhost:3000/interests/${interestId}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Authorization': userId,
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}
