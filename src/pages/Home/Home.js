import './Home.css'
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import { useContext, useEffect, useState } from 'react'
import withAuthentication from '../../hocs/withAuthentication/withAuthentication'
import { UserActivities } from '../../components/UserActivities/UserActivities'
import { getPosts } from '../../api/posts'
import { CurrentUserContext } from '../../context/CurrentUser'

function Home() {
  const currentUser = useContext(CurrentUserContext)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(currentUser._id).then(setPosts)
  }, [currentUser, setPosts])

  return (
    <div className='Home'>
      <div className='Home-header-wrapper'>
        <Header />
      </div>
      <div className='Home-content-wrapper'>
        <div className='Home-content-feed-wrapper'>
          <UserActivities />
          <hr />
          <Feed posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default withAuthentication(Home)
