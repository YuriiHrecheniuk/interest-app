import './AddInterest.css'
import { useContext, useState } from 'react'
import { UserInterestsDispatchContext } from '../../context/UserActivities'

export const AddInterest = () => {
  const userInterestsDispatch = useContext(UserInterestsDispatchContext)

  const [type, setType] = useState('BOOK')
  const [status, setStatus] = useState('PLANNED')

  const onSelectType = (e) => {
    setType(e.target.value)
  }

  const onSelectStatus = (e) => {
    setStatus(e.target.value)
  }

  const [subject, setSubject] = useState('')

  const isFormValid = subject.length >= 2

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
        status,
      },
    })
  }

  return <form className='AddInterest'>
    <h3>New interest</h3>
    <label htmlFor='type'>You're interested in:&nbsp;</label>
    <select onChange={onSelectType} value={type} name='type'>
      <option value='BOOK'>Book</option>
      <option value='MOVIE'>Movie</option>
      <option value='GAME'>Game</option>
    </select>
    <br />
    <br />
    <label htmlFor='subject'>Name:&nbsp;</label>
    <input value={subject} onChange={onEnterSubject} name='subject' required />
    <br />
    <br />
    <label htmlFor='status'>Status:&nbsp;</label>
    <select name='status' onChange={onSelectStatus} value={status}>
      <option value='PLANNED'>Planned</option>
      <option value='PROGRESS'>Progress</option>
      <option value='FINISHED'>Finished</option>
    </select>
    &nbsp;
    <input type='submit' onClick={onSubmit} disabled={!isFormValid} />
  </form>
}