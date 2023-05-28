import './Home.css'
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import {dummyPosts} from '../../dummy/posts'
import { useReducer } from 'react'
import postsReducer from '../../reducers/postsReducer'
import withAuthentication from '../../hocs/withAuthentication/withAuthentication'
import { UserActivities } from '../../components/UserActivities/UserActivities'

function Home() {
  const [posts, dispatch] = useReducer(postsReducer, dummyPosts)

  return (
    <div className="Home">
      <div className="Home-header-wrapper">
        <Header />
      </div>
      <div className="Home-content-wrapper">
        <div className="Home-content-feed-wrapper">
          <UserActivities />
          <hr />
          <Feed posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default withAuthentication(Home)
