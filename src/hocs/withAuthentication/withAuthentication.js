import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CurrentUserContext } from '../../context/CurrentUser'

export default function withAuthentication(Component) {
  return () => {
    const currentUser = useContext(CurrentUserContext)

    return currentUser ? <Component /> : <Navigate to="/" replace />
  }
}
