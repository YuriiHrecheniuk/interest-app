import { useFinishActivity } from '../../hooks/useFinishActivity'
import { useStartActivity } from '../../hooks/useStartActivity'

export const BookInterest = ({ data }) => {
  const startActivity = useStartActivity(data)
  const finishActivity = useFinishActivity(data)

  switch (data.status) {
    case 'PLANNED':
      return <p>Plans reading <strong>"{data.subject}"</strong> book <button onClick={startActivity}>Start</button></p>
    case 'PROGRESS':
      return <p>Reads <strong>"{data.subject}"</strong> book <button onClick={finishActivity}>Finish</button></p>
    case 'FINISHED':
      return <p>Finished reading <strong>"{data.subject}"</strong> book</p>
    default:
      return null
  }
}