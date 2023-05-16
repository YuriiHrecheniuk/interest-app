import './Feed.css'
import Post from '../Post/Post'

export default function Feed({ posts }) {
  return (
    <div className="Feed">
      {posts.map((post) => (
        <div className="Feed-post-wrapper">
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  )
}