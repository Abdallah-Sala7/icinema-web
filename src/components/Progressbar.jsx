import React from 'react'

function Progressbar(props) {
  return (
 <div className='w-72 h-3 rounded-xl bg-white mt-5'>
    <div className={props.percent}>
    <div className='h-3 rounded-xl bg-primary '></div>
    </div>
    
 </div>
  )
}

export default Progressbar
