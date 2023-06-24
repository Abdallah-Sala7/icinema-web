import React from 'react'

function Squarebutton(props) {
  return (
    <div className='w-10 h-10 mr-2 rounded-lg border flex justify-center items-center dark:border-gray hover:bg-gray'>
     {props.logo}
    </div>
  )
}

export default Squarebutton
