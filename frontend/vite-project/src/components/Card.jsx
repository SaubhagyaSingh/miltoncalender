import React from 'react'

const Card = ({myimg, title, desc, titleColor}) => {
  return (
    <div className='w-[360px] flex flex-col justify-center items-center mt-12 m-4'>
      <div className='bg-gray-200 border rounded-3xl p-8 h-[300px] w-[360px]'><img className='h-full w-full' src={myimg}></img></div>
      <div className='flex justify-center items-center bg-gray-200 p-2 rounded-full mt-6 mb-6 text-lg font-semibold' style={{background: titleColor}}>{title}</div>
      <div className='break-words text-gray-600 px-4 py-2'>{desc}</div>
    </div>
  )
}

export default Card