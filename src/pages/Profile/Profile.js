import './Profile.css'
import Header from '../../components/Header/Header'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'
import withAuthentication from '../../hocs/withAuthentication/withAuthentication'
import { useContext, useEffect } from 'react'
import { CurrentUserContext } from '../../context/CurrentUser'

function Profile() {
  const currentUser = useContext(CurrentUserContext)

  console.log(currentUser)

  return (
    <div className="Profile">
      <div className="Profile-header-wrapper">
        <Header />
      </div>
      <div className="Profile-content-wrapper">
        <AvatarIcon className="Profile-avatar-icon" />
        <div className="Profile-description-wrapper">
          <div>
            {currentUser.firstName} {currentUser.secondName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthentication(Profile)
