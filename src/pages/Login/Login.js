import './Login.css'
import { useState } from 'react'

export default function LoginForm() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

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
      <button
        className="Login-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault()

          console.log(login)
          console.log(password)
        }}
      >
        Log In
      </button>
    </form>
  )
}
