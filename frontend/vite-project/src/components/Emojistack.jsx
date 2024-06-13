import React from 'react'
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"

const Emojistack = () => {
  return (
    <div className='flex gap-0'>
    <div className='flex mt-4'>
      <div className='h-10 w-10 flex items-center justify-center border-black border rounded-full bg-purple-400'>            
        <img className='h-8 w-6' src={f1}></img>
      </div>
      <div className='h-10 w-10 flex items-center justify-center border-black border rounded-full -translate-x-3 bg-blue-400 '>            
        <img className='h-8 w-6' src={f2}></img>
      </div>
      <div className='h-10 w-10 flex items-center justify-center border-black border rounded-full -translate-x-6 bg-pink-400'>            
        <img className='h-8 w-6' src={f3}></img>
      </div>
      <div className='h-10 w-10 flex items-center justify-center border-black border rounded-full -translate-x-9 bg-orange-400'>            
        <img className='h-8 w-6' src={f4}></img>
      </div>
      <div className='h-10 w-10 flex items-center justify-center border-black border rounded-full -translate-x-12 bg-green-400'>            
        <img className='h-8 w-6' src={f1}></img>
      </div>
        </div>
        <div className='mt-2 -translate-x-10'>
        <div className='flex flex-row'>
        <div className=' text-yellow-500'>⭐</div>
            <div className='text-yellow-500'>⭐</div>
            <div className='text-yellow-500'>⭐</div>
            <div className='text-yellow-500'>⭐</div>
            <div className='text-yellow-500'>⭐</div>
            <div>5.0</div>
        </div>
        <div className='text-[14px] text-gray-400 font-semibold'>
            From 200+ Happy Users
        </div>
        </div>
    </div>
  )
}

export default Emojistack
