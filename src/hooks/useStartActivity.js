import { useContext } from 'react'
import { UserInterestsDispatchContext } from '../context/UserActivities'
import { CurrentUserContext } from '../context/CurrentUser'
import { updateInterest } from '../api/interests'

export const useStartActivity = (activityData) => {
  const currentUser = useContext(CurrentUserContext)

  const userInterestsDispatch = useContext(UserInterestsDispatchContext)

  return async () => {
    const interest = await updateInterest(currentUser._id, activityData._id, {
      status: 'PROGRESS',
    })

    userInterestsDispatch({
      type: 'START_ACTIVITY',
      activity: interest,
    })
  }
}