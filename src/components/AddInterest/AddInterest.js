import { useContext, useState } from 'react'
import { UserInterestsDispatchContext } from '../../context/UserActivities'

export const AddInterest = () => {
  const userInterestsDispatch = useContext(UserInterestsDispatchContext)

  const [type, setType] = useState('BOOK')

  const onSelectType = (e) => {
    setType(e.target.value)
  }

  const [subject, setSubject] = useState('')

  const onEnterSubject = (e) => {
    setSubject(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    userInterestsDispatch({
      type: 'ADD_ACTIVITY',
      activity: {
        id: '1231243124',
        type,
        subject,
      },
    })
  }

  return <form>
    <h3>Add interest</h3>
    <select onChange={onSelectType} value={type}>
      <option value='BOOK'>Book</option>
      <option value='MOVIE'>Movie</option>
      <option value='GAME'>Game</option>
    </select>
    <input value={subject} onChange={onEnterSubject} />
    <select>
      <option value='planned'>Planned</option>
      <option value='progress'>Progress</option>
      <option value='finished'>Finished</option>
    </select>
    <input type='submit' onClick={onSubmit} />
  </form>
}