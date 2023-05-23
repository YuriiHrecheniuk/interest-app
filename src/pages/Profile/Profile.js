import './Profile.css'
import Header from '../../components/Header/Header'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'
import withAuthentication from '../../hocs/withAuthentication/withAuthentication'

function Profile() {
  return (
    <div className="Profile">
      <div className="Profile-header-wrapper">
        <Header />
      </div>
      <div className="Profile-content-wrapper">
        <AvatarIcon className="Profile-avatar-icon" />
      </div>
    </div>
  )
}

export default withAuthentication(Profile)
