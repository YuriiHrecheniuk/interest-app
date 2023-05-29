import { useFinishActivity } from '../../hooks/useFinishActivity'
import { useStartActivity } from '../../hooks/useStartActivity'

export const BookInterest = ({ data }) => {
  const startActivity = useStartActivity(data)
  const finishActivity = useFinishActivity(data)

  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans reading <strong>"{data.subject}"</strong> book <button onClick={startActivity}>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Reads <strong>"{data.subject}"</strong> book <button onClick={finishActivity}>Finish</button></p>
  }

  return <p>Finished reading <strong>"{data.subject}"</strong> book</p>
}