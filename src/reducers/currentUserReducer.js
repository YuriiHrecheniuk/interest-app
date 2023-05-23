export function currentUserReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    default:
      return state
  }
}
