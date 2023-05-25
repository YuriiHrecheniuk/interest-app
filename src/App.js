import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import LoginForm from './pages/Login/Login'
import {
  CurrentUserContext,
  CurrentUserDispatchContext,
} from './context/CurrentUser'
import './App.css'
import { useReducer } from 'react'
import { currentUserReducer } from './reducers/currentUserReducer'

export default function App() {
  const [currentUser, currentUserDispatch] = useReducer(
    currentUserReducer,
    null
  )

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={currentUserDispatch}>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={!currentUser ? <LoginForm /> : <Navigate to="/home" />}
            />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="redirect" element={<Navigate to="/home" />} />
          </Routes>
        </BrowserRouter>
      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  )
}
