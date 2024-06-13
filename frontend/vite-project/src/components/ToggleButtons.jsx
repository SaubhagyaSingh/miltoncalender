import React from 'react';

const ToggleButtons = ({ activeDeal, setActiveDeal }) => {
  return (
    <div>

    <div className="flex justify-center mb-4 rounded-full bg-gray-300 p-4">
        <div>

          <button
        className={` rounded-full px-8 py-2 rounded-r-md ${activeDeal === 'deal2' ? 'bg-white text-black' : 'bg-gray-300 text-gray-700'}`}
        onClick={() => setActiveDeal('deal2')}
      >
        Deal 1
      </button>
      <button
        className={`rounded-full px-8 py-2 rounded-l-md ${activeDeal === 'deal1' ? 'bg-white text-black' : 'bg-gray-300 text-gray-700'}`}
        onClick={() => setActiveDeal('deal1')}
      >
        Deal 2
      </button>
      </div>
      
      </div>
      <div className='ml-16'>
        ✨Save 30% off
      </div>
    </div>
  );
};

export default ToggleButtons;
