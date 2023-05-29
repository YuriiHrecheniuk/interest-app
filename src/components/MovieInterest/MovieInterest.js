import { useStartActivity } from '../../hooks/useStartActivity'
import { useFinishActivity } from '../../hooks/useFinishActivity'

export const MovieInterest = ({ data }) => {
  const startActivity = useStartActivity(data)
  const finishActivity = useFinishActivity(data)

  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans watching <strong>"{data.subject}"</strong> movie <button onClick={startActivity}>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Watches <strong>"{data.subject}"</strong> movie <button onClick={finishActivity}>Finish</button></p>
  }

  return <p>Finished watching <strong>"{data.subject}"</strong> movie</p>
}