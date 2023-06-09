import React, { useContext } from 'react'
import { BookInterest } from '../BookInterest/BookInterest'
import { MovieInterest } from '../MovieInterest/MovieInterest'
import { GameInterest } from '../GameInterest/GameInterest'
import { UserInterestsContext } from '../../context/UserActivities'
import { AddInterest } from '../AddInterest/AddInterest'

export const UserActivities = () => {
  const userInterests = useContext(UserInterestsContext)

  const unfinishedUserInterests = userInterests.filter(({ status }) => status !== 'FINISHED')

  const booksInterests = unfinishedUserInterests.filter(({ type, finishedAt }) => type === 'BOOK')
  const moviesInterests = unfinishedUserInterests.filter(({ type, finishedAt }) => type === 'MOVIE')
  const gamesInterests = unfinishedUserInterests.filter(({ type, finishedAt }) => type === 'GAME')

  return <section>
    <h2>Your activities</h2>
    {booksInterests.map((interest) => <BookInterest data={interest} key={interest._id} />)}
    {moviesInterests.map((interest) => <MovieInterest data={interest} key={interest._id} />)}
    {gamesInterests.map((interest) => <GameInterest data={interest} key={interest._id} />)}
    {!unfinishedUserInterests.length ? <p>You have finished all your activities</p> : null}
    <AddInterest />
  </section>
}