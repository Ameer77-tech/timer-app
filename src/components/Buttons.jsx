import React from 'react'

const Buttons = (props) => {
  return (
    <div className='mt-10 h-50 flex flex-col  items-center'>
        <div className='flex justify-between w-80'>
            <div
            className='bg-emerald-600 font-medium font-mono w-25 h-25 flex items-center justify-center p-7 rounded-full
                 cursor-pointer select-none active:scale-85 transition-all ease-In
            '
                onClick={()=>{
                    props.onButtonClick("Start")
                }}
            >Start</div>
            <div className='bg-red-500 font-medium font-mono w-25 h-25 flex items-center justify-center p-7 rounded-full
                cursor-pointer  select-none active:scale-85 transition-all ease-In
            '
            onClick={()=>{
                props.onButtonClick("Stop")
            }}
            >Stop</div>
        </div>
        <div className='bg-white font-medium font-mono w-25 h-25 flex items-center justify-center text-black p-7 rounded-full
             cursor-pointer  select-none active:scale-85 transition-all ease-In
        '
        onClick={()=>{
            props.onButtonClick("Reset")
        }}
        >Reset</div>
    </div>
  )
}

export default Buttons