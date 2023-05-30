import { useContext } from 'react'
import { UserInterestsDispatchContext } from '../context/UserActivities'

export const useStartActivity = (activityData) => {
  const userInterestsDispatch = useContext(UserInterestsDispatchContext)

  return async () => {
    userInterestsDispatch({
      type: 'START_ACTIVITY',
      activity: {
        ...activityData,
        status: 'PROGRESS',
        startedAt: new Date()
      }
    })
  };
}