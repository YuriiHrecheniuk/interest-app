import React, { useContext } from 'react'
import { BookInterest } from '../BookInterest/BookInterest'
import { MovieInterest } from '../MovieInterest/MovieInterest'
import { GameInterest } from '../GameInterest/GameInterest'
import { UserInterestsContext } from '../../context/UserActivities'

export const UserActivities = () => {
  const userInterests = useContext(UserInterestsContext)

  const booksInterests = userInterests.filter(({ type, finishedAt }) => type === 'BOOK' && !finishedAt)
  const moviesInterests = userInterests.filter(({ type, finishedAt }) => type === 'MOVIE' && !finishedAt)
  const gamesInterests = userInterests.filter(({ type, finishedAt }) => type === 'GAME' && !finishedAt)

  return <section>
    <h2>Your activities</h2>
    {booksInterests.map((interest) => <BookInterest data={interest} key={interest.id} />)}
    {moviesInterests.map((interest) => <MovieInterest data={interest} key={interest.id} />)}
    {gamesInterests.map((interest) => <GameInterest data={interest} key={interest.id} />)}
  </section>
}