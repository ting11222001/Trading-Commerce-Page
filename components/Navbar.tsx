import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

type Props = {}

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-green'>TRADING</h1>
        </div>
        <div className='hidden lg:flex'>
          <div className='flex text-white items-center space-x-4'>
            <a href='#about'>About</a>
            <a href='#why'>Choose us</a>
            <a href='#connect'>Connect</a>
          </div>

          <button className='ml-4 bg-gradient-to-r from-green to-purple hover:from-pink hover:to-yellow'>Join</button>
        </div>
        {/* Hamburger menu */}
        <div onClick={handleMenu} className='block lg:hidden'>
          {menu ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile menu */}
        <div className={menu ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'} >
          <div className='flex flex-col text-white items-center'>
            <a href='#about' className='mb-4'>About</a>
            <a href='#why' className='mb-4'>Choose us</a>
            <a href='#connect' className='mb-4'>Connect</a>
            <button className='my-4 bg-gradient-to-r from-green to-purple hover:from-pink hover:to-yellow'>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar