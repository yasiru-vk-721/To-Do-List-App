import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-500 p-4 md:p-8'>
        <div className='flex justify-between items-center'>
            <div className='text-white text-2xl font-bold'>
                Quick-Tick
            </div>
            <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>

            <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
            <a href='#' className='block md:inline-block text-white px-3 py-2 rounded hover:bg-gray-600'>Home</a>
            <a href='#' className='block md:inline-block text-white px-3 py-2 rounded hover:bg-gray-600'>About</a>
            <a href='#' className='block md:inline-block text-white px-3 py-2 rounded hover:bg-gray-600'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar