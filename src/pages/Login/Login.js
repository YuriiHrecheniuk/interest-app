import './Login.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginForm() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  return (
    <form className="Login">
      <input
        className="Login-input"
        placeholder="login:"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        className="Login-input"
        type="password"
        placeholder="password:"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="Login-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault()

          navigate('/home')
        }}
      / >
    </form>
  )
}
