import './Post.css'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'

export default function Post({ post }) {
  return (
    <div className="Post">
      <div>
        <AvatarIcon className="Post-avatar" />
      </div>
      <div>
        <div className='Post-user-info'><strong>{post.firstName} {post.secondName}</strong> @{post.username}</div>
        <div>{post.text}</div>
        <small>{post.date}</small>
      </div>
    </div>
  )
}
