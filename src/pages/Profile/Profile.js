import './Profile.css'
import Header from '../../components/Header/Header'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'
import withAuthentication from '../../hocs/withAuthentication/withAuthentication'
import { useEffect, useState } from 'react'
import ProfileDescription from '../../components/ProfileDescription/ProfileDescription'
import { getInterests } from '../../api/interests'
import { BookInterest } from '../../components/BookInterest/BookInterest'
import { MovieInterest } from '../../components/MovieInterest/MovieInterest'
import { GameInterest } from '../../components/GameInterest/GameInterest'

function Profile() {
  const [interests, setInterests] = useState([])
  useEffect(() => {
    getInterests('').then(setInterests)
  }, [setInterests])

  const booksInterests = interests.filter(({ type }) => type === 'BOOK')
  const moviesInterests = interests.filter(({ type }) => type === 'MOVIE')
  const gamesInterests = interests.filter(({ type }) => type === 'GAME')


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
              <hr className='Profile-interests-divider' align='left' />
            </>)}
          </article> : null}
          {moviesInterests.length ? <article>
            <h2>Movies interests</h2>
            {moviesInterests.map((interest, i) => <><MovieInterest data={interest} key={i} />
              <hr className='Profile-interests-divider' align='left' />
            </>)}</article> : null
          }
          {gamesInterests.length ? <article>
            <h2>Games interests</h2>
            {gamesInterests.map((interest, i) => <><GameInterest data={interest} key={i} />
              <hr className='Profile-interests-divider' align='left' />
            </>)}
          </article> : null}
        </section>
      </div>
    </div>
  )
}

export default withAuthentication(Profile)
