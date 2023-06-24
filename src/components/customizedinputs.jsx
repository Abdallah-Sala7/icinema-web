import React from 'react'

function Customizedinputs(props) {
  return (
    <div className='flex flex-col mx-2'>
        <label for={props.id} className='my-2 '>{props.name}</label>
      <input type={props.type}  id={props.id} className='border w-[560px] rounded-xl ' placeholder={props.placeholder} />
      {props.logo}
    </div>
  )
}

export default Customizedinputs
