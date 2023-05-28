import { useContext, useEffect, useState } from 'react'
import { CurrentUserDispatchContext } from '../../../context/CurrentUser'

import { dummyLogin } from '../../../dummy/login'
import { dummyPassword } from '../../../dummy/password'
import { dummyCurrentUser } from '../../../dummy/currentUser'
import { useNavigate } from 'react-router-dom'

export const useSignIn = () => {
  const currentUserDispatch = useContext(CurrentUserDispatchContext)
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (
      credentials.login === dummyLogin &&
      credentials.password === dummyPassword
    ) {
      currentUserDispatch({
        type: 'LOGIN',
        user: dummyCurrentUser,
      })

      navigate('/home')

      return
    }

    console.log('invalid credentials')
  }, [credentials, navigate, currentUserDispatch])

  return setCredentials
}
