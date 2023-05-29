import { useStartActivity } from '../../hooks/useStartActivity'
import { useFinishActivity } from '../../hooks/useFinishActivity'

export const GameInterest = ({ data }) => {
  const startActivity = useStartActivity(data);
  const finishActivity = useFinishActivity(data);

  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans playing <strong>"{data.subject}"</strong> game <button onClick={startActivity}>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Plays <strong>"{data.subject}"</strong> game <button onClick={finishActivity}>Finish</button></p>
  }

  return <p>Finished playing <strong>"{data.subject}"</strong> game</p>
}