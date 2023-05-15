import './PostsList.css'
import Post from '../Post/Post'

export default function PostsList({ posts }) {
  

  return (
    <div className="PostsList">
      {posts.map((post) => (
        <div className='PostsList-post-wrapper'>
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  )
}
