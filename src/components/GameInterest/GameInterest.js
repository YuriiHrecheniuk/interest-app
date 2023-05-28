export const GameInterest = ({ data }) => {
  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans playing <strong>"{data.subject}"</strong> game</p>
  }

  if (startedAt && !finishedAt) {
    return <p>Plays <strong>"{data.subject}"</strong> game</p>
  }

  return <p>Finished playing <strong>"{data.subject}"</strong> game</p>
}