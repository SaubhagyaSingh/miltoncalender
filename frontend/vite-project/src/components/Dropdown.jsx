import React, { useState } from 'react';

const Dropdown = ({question}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='relative bg-gray-200 w-[800px] h-auto p-4 rounded-md shadow-md'>
      {/* Container for the question and the toggle button */}
      <div className='flex justify-between items-center'>
        <div className='text-lg font-semibold'>
            {question}
        </div>
        <div className='bg-gray-600 text-white rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer' onClick={toggleOpen}>
          <button>{isOpen ? '-' : '+'}</button>
        </div>
      </div>
      
      {/* The answer section */}
      <div className={`transition-all ease-out duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi commodi ab voluptate alias, nulla omnis cum rerum cumque animi! Eaque autem fuga provident neque, incidunt rem reprehenderit eligendi sit.
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
