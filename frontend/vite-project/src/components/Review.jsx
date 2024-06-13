// Review.jsx

import React from 'react';

const Review = ({ myimg, Tag, text, name, profession }) => {
  return (
    <div className='bg-white w-[300px] md:w-[400px] flex flex-col rounded-lg p-4 m-2 overflow-hidden'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center'>
          <div className='h-12 w-12 border-black border rounded-full bg-purple-400 flex justify-center items-center mr-4'>
            <img className='h-10 w-10 rounded-full' src={myimg} alt="Review" />
          </div>
          <div className='font-bold break-words'>{`"${Tag}"`}</div>
        </div>
        <div className='flex space-x-1'>
          <div className='text-yellow-500'>⭐</div>
          <div className='text-yellow-500'>⭐</div>
          <div className='text-yellow-500'>⭐</div>
          <div className='text-yellow-500'>⭐</div>
          <div className='text-yellow-500'>⭐</div>
        </div>
      </div>
      <div className='text-gray-500 text-[16px] mb-4 break-words'>{text}</div>
      <div className='flex justify-between items-center font-semibold'>
        <div className='break-words'>{name}</div>
        <div className='text-gray-400 break-words'>{profession}</div>
      </div>
    </div>
  );
}

export default Review;
