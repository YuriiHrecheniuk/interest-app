import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import LoginForm from './pages/Login/Login'
import { CurrentUserContext, CurrentUserDispatchContext } from './context/CurrentUser'
import './App.css'
import { useEffect, useReducer } from 'react'
import { currentUserReducer } from './reducers/currentUserReducer'
import { UserInterestsContext, UserInterestsDispatchContext } from './context/UserActivities'
import { userActivitiesReducer } from './reducers/userActivitiesReducer'
import { getInterests } from './api/interests'

export default function App() {
  const [currentUser, currentUserDispatch] = useReducer(
    currentUserReducer,
    null,
  )

  const [userActivities, userActivitiesDispatch] = useReducer(
    userActivitiesReducer,
    [],
  )

  useEffect(() => {
    getInterests('').then((interests) => userActivitiesDispatch({ type: 'SET_ACTIVITIES', activities: interests }))
  }, [userActivitiesDispatch])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={currentUserDispatch}>
        <UserInterestsContext.Provider value={userActivities}>
          <UserInterestsDispatchContext.Provider value={userActivitiesDispatch}>
            <BrowserRouter>
              <Routes>
                <Route
                  index
                  element={!currentUser ? <LoginForm /> : <Navigate to='/home' />}
                />
                <Route path='home' element={<Home />} />
                <Route path='profile' element={<Profile />} />
                <Route path='redirect' element={<Navigate to='/home' />} />
              </Routes>
            </BrowserRouter>
          </UserInterestsDispatchContext.Provider>
        </UserInterestsContext.Provider>
      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  )
}
