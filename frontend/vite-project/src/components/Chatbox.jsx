import React from 'react'

const Chatbox = ({text}) => {
  return (
    <div className='text-black bg-[#eed0b6] text-center text-[16px] p-3 font-bold rounded-full max-w-[200px]'>
    {text}
  </div>
  )
}

export default Chatbox
