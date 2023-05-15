import './Feed.css'
import Header from '../../components/Header/Header'
import PostsList from '../../components/PostsList/PostsList'
import NewPost from '../../components/NewPost/NewPost'
import dummyPosts from '../../dummy/posts'
import { useReducer } from 'react'
import postsReducer from '../../reducers/postsReducer'

export default function Feed() {
  const [posts, dispatch] = useReducer(postsReducer, dummyPosts)

  return (
    <div className="Feed">
      <div className="Feed-header-wrapper">
        <Header />
      </div>
      <div className="Feed-new-post-wrapper">
        <NewPost dispatch={dispatch} />
      </div>
      <div className="Feed-posts-list-wrapper">
        <PostsList posts={posts} />
      </div>
    </div>
  )
}
