export const BookInterest = ({ data }) => {
  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans reading <strong>"{data.subject}"</strong> book <button>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Reads <strong>"{data.subject}"</strong> book <button>Finish</button></p>
  }

  return <p>Finished reading <strong>"{data.subject}"</strong> book</p>
}