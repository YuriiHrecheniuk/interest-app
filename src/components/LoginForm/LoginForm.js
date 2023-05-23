import './LoginForm.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { dummyLogin } from '../../dummy/login'
import { dummyPassword } from '../../dummy/password'
import { dummyCurrentUser } from '../../dummy/currentUser'

import { CurrentUserDispatchContext } from '../../context/CurrentUser'

export default function LoginForm() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const currentUserDispatch = useContext(CurrentUserDispatchContext)

  function signIn(login, password) {
    if (login === dummyLogin && password === dummyPassword) {
      currentUserDispatch({
        type: 'LOGIN',
        user: dummyCurrentUser,
      })

      navigate('/home')

      return
    }

    console.log('invalid credentials')
  }

  function onSignInButtonClick(e) {
    e.preventDefault()

    signIn(login, password)
  }

  return (
    <form className="Login">
      <input
        className="LoginForm-input"
        placeholder="login:"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        className="LoginForm-input"
        type="password"
        placeholder="password:"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="LoginForm-button"
        type="submit"
        onClick={onSignInButtonClick}
      />
    </form>
  )
}
