import { useStartActivity } from '../../hooks/useStartActivity'
import { useFinishActivity } from '../../hooks/useFinishActivity'

export const GameInterest = ({ data }) => {
  const startActivity = useStartActivity(data)
  const finishActivity = useFinishActivity(data)

  switch (data.status) {
    case 'PLANNED':
      return <p>Plans playing <strong>"{data.subject}"</strong> game <button onClick={startActivity}>Start</button></p>
    case 'PROGRESS':
      return <p>Plays <strong>"{data.subject}"</strong> game <button onClick={finishActivity}>Finish</button></p>
    case 'FINISHED':
      return <p>Finished playing <strong>"{data.subject}"</strong> game</p>
    default:
      return null
  }
}