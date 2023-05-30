import { useStartActivity } from '../../hooks/useStartActivity'
import { useFinishActivity } from '../../hooks/useFinishActivity'

export const MovieInterest = ({ data }) => {
  const startActivity = useStartActivity(data)
  const finishActivity = useFinishActivity(data)

  switch (data.status) {
    case 'PLANNED':
      return <p>Plans watching <strong>"{data.subject}"</strong> movie <button onClick={startActivity}>Start</button>
      </p>
    case 'PROGRESS':
      return <p>Watches <strong>"{data.subject}"</strong> movie <button onClick={finishActivity}>Finish</button></p>
    case 'FINISHED':
      return <p>Finished watching <strong>"{data.subject}"</strong> movie</p>
    default:
      return null
  }
}