import './Profile.css'
import Header from '../../components/Header/Header'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'
import withAuthentication from '../../hocs/withAuthentication/withAuthentication'
import { useEffect, useState } from 'react'
import ProfileDescription from '../../components/ProfileDescription/ProfileDescription'
import { getInterests } from '../../api/interests'
import { BookInterest } from '../../components/BookInterest/BookInterest'

function Profile() {
  const [interests, setInterests] = useState([])
  useEffect(() => {
    getInterests('').then(setInterests)
  }, [setInterests])

  const booksInterests = interests.filter(({ type }) => type === 'BOOK')


  return (
    <div className='Profile'>
      <div className='Profile-header-wrapper'>
        <Header />
      </div>
      <div className='Profile-content-wrapper'>
        <AvatarIcon className='Profile-avatar-icon' />
        <div className='Profile-description-wrapper'><ProfileDescription /></div>
        <section className='Profile-interests-section'>
          {booksInterests.length ? <article>
            <h2>Books interests</h2>
            {booksInterests.map((interest, i) => <><BookInterest data={interest} key={i} />
              <hr />
            </>)}
          </article> : null}
        </section>
      </div>
    </div>
  )
}

export default withAuthentication(Profile)
