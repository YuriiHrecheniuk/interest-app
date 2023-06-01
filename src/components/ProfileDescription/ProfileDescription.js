import './ProfileDescription.css'
import { useContext } from 'react'
import { CurrentUserContext } from '../../context/CurrentUser'

export default function ProfileDescription() {
  const currentUser = useContext(CurrentUserContext)
  console.log(currentUser)

  return <article className='ProfileDescription'>
    <strong>{currentUser.name}</strong>

    <div>@{currentUser.nickname}</div>
    <br />
    <div>Birthday: {new Date(currentUser.birthDate).toDateString()}</div>
    <br />
    <div><b>{currentUser.friends.length}</b> friends</div>
  </article>
}
