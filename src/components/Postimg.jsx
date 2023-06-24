import React from 'react'

function Postimg(props) {
  return (
    <div className='w-full flex justify-center items-center mt-7 mb-4' >
      <img  className='w-full rounded-xl object-cover ' src={props.src} alt={props.alt} />
    </div>
  )
}

export default Postimg
