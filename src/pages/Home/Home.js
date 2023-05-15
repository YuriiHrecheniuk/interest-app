import './Home.css'
import Header from '../../components/Header/Header'
import PostsList from '../../components/PostsList/PostsList'
import dummyPosts from '../../dummy/posts'
import { useReducer } from 'react'
import postsReducer from '../../reducers/postsReducer'

export default function Home() {
  const [posts, dispatch] = useReducer(postsReducer, dummyPosts)

  return (
    <div className="Home">
      <div className="Home-header-wrapper">
        <Header />
      </div>
      <div className="Home-content-wrapper">
        <PostsList posts={posts} />
      </div>
    </div>
  )
}
