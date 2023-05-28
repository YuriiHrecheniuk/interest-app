export const GameInterest = ({ data }) => {
  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans playing <strong>"{data.subject}"</strong> game <button>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Plays <strong>"{data.subject}"</strong> game <button>Finish</button></p>
  }

  return <p>Finished playing <strong>"{data.subject}"</strong> game</p>
}