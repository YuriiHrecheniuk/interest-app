import { useEffect, useState } from 'react'
import { getInterests } from '../../api/interests'
import { BookInterest } from '../BookInterest/BookInterest'
import { MovieInterest } from '../MovieInterest/MovieInterest'
import { GameInterest } from '../GameInterest/GameInterest'

export const UserActivities = () => {
  const [interests, setInterests] = useState([])
  useEffect(() => {
    getInterests('').then(setInterests)
  }, [setInterests])

  const booksInterests = interests.filter(({ type, finishedAt }) => type === 'BOOK' && !finishedAt)
  const moviesInterests = interests.filter(({ type, finishedAt }) => type === 'MOVIE' && !finishedAt)
  const gamesInterests = interests.filter(({ type, finishedAt }) => type === 'GAME' && !finishedAt)

  return <section>
    <h2>Your activities</h2>
    {booksInterests.map((interest, i) => <><BookInterest data={interest} key={i} />
    </>)}
    {moviesInterests.map((interest, i) => <><MovieInterest data={interest} key={i} />
    </>)}
    {gamesInterests.map((interest, i) => <><GameInterest data={interest} key={i} />
    </>)}
  </section>
}