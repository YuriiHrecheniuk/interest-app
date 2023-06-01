import './Post.css'
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg'

export default function Post({ post }) {
  return (
    <div className="Post">
      <div>
        <AvatarIcon className="Post-avatar" />
      </div>
      <div>
        <div className='Post-user-info'><strong>{post.author.name}</strong> @{post.author.nickname}</div>
        <div>{post.text}</div>
      </div>
    </div>
  )
}
