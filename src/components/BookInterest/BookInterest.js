import { useContext } from 'react'
import { UserInterestsDispatchContext } from '../../context/UserActivities'

export const BookInterest = ({ data }) => {
  const userInterestsDispatch = useContext(UserInterestsDispatchContext)

  const finishActivity = async () => {
    userInterestsDispatch({
      type: 'FINISH_ACTIVITY',
      activity: {
        ...data,
        finishedAt: new Date()
      }
    })
  }

  const { startedAt, finishedAt } = data

  if (!startedAt) {
    return <p>Plans reading <strong>"{data.subject}"</strong> book <button>Start</button></p>
  }

  if (startedAt && !finishedAt) {
    return <p>Reads <strong>"{data.subject}"</strong> book <button onClick={finishActivity}>Finish</button></p>
  }

  return <p>Finished reading <strong>"{data.subject}"</strong> book</p>
}