import React from 'react'

function PostDescription(props) {
  return (
    <div>
      <h1 className='dark:text-white mx-4'>{props.desc}</h1>
    </div>
  )
}

export default PostDescription
