export const MovieInterest = ({ data }) => {
  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans watching <strong>"{data.subject}"</strong> book</p>
  }

  if (startedAt && !finishedAt) {
    return <p>Watches <strong>"{data.subject}"</strong> book</p>
  }

  return <p>Finished watching <strong>"{data.subject}"</strong> book</p>
}