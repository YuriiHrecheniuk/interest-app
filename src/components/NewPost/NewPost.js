import './NewPost.css'
import { useState } from 'react'

export default function NewPost({ dispatch }) {
  const [text, setText] = useState('')

  function addPost(event) {
    event.preventDefault()

    const post = {
      text,
      username: 'Hrechen',
    }

    dispatch({ type: 'ADD_POST', post })
  }

  function enterText(event) {
    const { value } = event.target

    setText(value)
  }

  return (
    <form className='NewPost'>
      <textarea onChange={enterText} />
      <input type="submit" onClick={addPost} />
    </form>
  )
}
