export const MovieInterest = ({ data }) => {
  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans watching <strong>"{data.subject}"</strong> movie <button>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Watches <strong>"{data.subject}"</strong> movie <button>Finish</button></p>
  }

  return <p>Finished watching <strong>"{data.subject}"</strong> movie</p>
}