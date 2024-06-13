import React from 'react';
import { IoMdArrowDropupCircle } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='fixed bg-white w-full top-0 z-10'>
            <div className="flex justify-between my-2 p-2 overflow-x-hidden">
                <div className="flex ml-48">
                    <div className='w-14 h-14 flex'>

                        <svg xmlns="http://www.w3.org/2000/svg" className='w-14 h-14 p-0 translate-x-3 -translate-y-1' viewBox="0 0 24 24"><path fill="currentColor" d="M8.2 14q-.225 0-.362-.15T7.7 13.5q0-.05.15-.35l3.625-3.625q.125-.125.25-.175T12 9.3t.275.05t.25.175l3.625 3.625q.075.075.113.163t.037.187q0 .2-.137.35T15.8 14z"></path></svg>
                    </div>
                    <div className='text-[36px] font-bold'>Milton</div>
                </div>
                <div className="mr-48 flex">
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8' viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"></path></svg>
                    </div>
                </div>
            </div>
            <hr className='border-t-4 border-black w-80% ml-12 overflow-x-hidden' />
        </div>
    );
};

export default Navbar;