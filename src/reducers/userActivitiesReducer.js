export const userActivitiesReducer = (state, action) => {
  switch (action.type) {
    case 'START_ACTIVITY':
    case 'FINISH_ACTIVITY':
      return [...state.filter(({ id }) => id !== action.activity.id), action.activity]
    case 'SET_ACTIVITIES':
      return action.activities
    default:
      return state
  }
}