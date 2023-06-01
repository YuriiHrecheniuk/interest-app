export const userActivitiesReducer = (state, action) => {
  switch (action.type) {
    case 'START_ACTIVITY':
    case 'FINISH_ACTIVITY':
      return [...state.filter(({ _id }) => _id !== action.activity._id), action.activity]
    case 'SET_ACTIVITIES':
      return action.activities
    case 'ADD_ACTIVITY':
      return [...state, action.activity]
    default:
      return state
  }
}