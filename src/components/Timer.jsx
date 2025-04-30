import React from 'react'

const Timer = (props) => {
  return (
    <div className='mt-10'>
        <h1 className='font-bold text-center text-8xl'>{props.time}</h1>
    </div>
  )
}

export default Timer