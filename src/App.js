import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Feed from './pages/Feed/Feed'
import Profile from './pages/Profile/Profile'
import LoginForm from './pages/Login/Login'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
        <Route path="redirect" element={<Navigate to="/feed" />} />
      </Routes>
    </BrowserRouter>
  )
}
