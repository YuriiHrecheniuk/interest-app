import { useContext } from 'react'
import { UserInterestsDispatchContext } from '../context/UserActivities'

export const useFinishActivity = (activityData) => {
  const userInterestsDispatch = useContext(UserInterestsDispatchContext)

  return async () => {
    userInterestsDispatch({
      type: 'FINISH_ACTIVITY',
      activity: {
        ...activityData,
        status: 'FINISHED',
        finishedAt: new Date()
      }
    })
  };
}