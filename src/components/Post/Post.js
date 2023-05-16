import './Post.css'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'

export default function Post({ post }) {
  return (
    <div className="Post">
      <div>
        <AvatarIcon className="Post-avatar" />
      </div>
      <div>
        <div><strong>{post.username}</strong></div>
        <div>{post.text}</div>
      </div>
    </div>
  )
}
