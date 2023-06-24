import React from 'react'
import Squarebutton from './Squarebutton'
import {BiEdit} from 'react-icons/bi'
function Edit() {
  return (
    <div>
      <Squarebutton logo={ <BiEdit size={'2rem'} className='text-black dark:text-white'/>}/>
    </div>
  )
}

export default Edit
