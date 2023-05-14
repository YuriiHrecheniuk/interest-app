import './Header.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'

export default function Header() {
  const navigate = useNavigate()

  function navigateToFeed() {
    navigate('/feed')
  }

  function navigateToProfile() {
    navigate('/profile')
  }

  return (
    <header className="Header">
      <div className="Header-logo Header-link" onClick={navigateToFeed}>
        INTEREST
      </div>
      <AvatarIcon
        className="Header-profile-icon Header-link"
        onClick={navigateToProfile}
      />
    </header>
  )
}
