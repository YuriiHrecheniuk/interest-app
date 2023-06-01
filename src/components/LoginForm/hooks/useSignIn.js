import { useContext, useEffect, useState } from 'react'
import { CurrentUserDispatchContext } from '../../../context/CurrentUser'

import { dummyLogin } from '../../../dummy/login'
import { dummyPassword } from '../../../dummy/password'
import { useNavigate } from 'react-router-dom'
import { dummyCurrentUserId } from '../../../dummy/dummyCurrentUserId'

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
      getUser(dummyCurrentUserId).then((user) => {
        currentUserDispatch({
          type: 'LOGIN',
          user,
        })

        navigate('/home')
      })
    } else {
      console.log('invalid credentials')
    }
  }, [credentials, navigate, currentUserDispatch])

  return setCredentials
}
