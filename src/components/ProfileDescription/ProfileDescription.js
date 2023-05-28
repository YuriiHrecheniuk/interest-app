import './ProfileDescription.css'
import { useContext } from 'react'
import { CurrentUserContext } from '../../context/CurrentUser'

export default function ProfileDescription() {
  const currentUser = useContext(CurrentUserContext)

  return <article className="ProfileDescription">
    <strong>{currentUser.firstName} {currentUser.secondName}</strong>

    <div>@{currentUser.nickname}</div>
    <br />
    <div>Birthday: {currentUser.birthday.toDateString()}</div>
    <br />
    <div><b>{currentUser.friendsCount}</b> friends</div>
  </article>
}
