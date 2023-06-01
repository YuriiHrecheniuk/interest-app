export function currentUserReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('action.user', action.user)
      return action.user
    default:
      return state
  }
}
