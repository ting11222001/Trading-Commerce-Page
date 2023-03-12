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
            <a href='#'>Platform</a>
            <a href='#'>Developers</a>
            <a href='#'>Community</a>
            <a href='#'>About</a>
          </div>

          <button className='ml-4'>Join</button>
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
          <div className='flex flex-col text-white items-center space-y-4'>
            <a href='#'>Platform</a>
            <a href='#'>Developers</a>
            <a href='#'>Community</a>
            <a href='#'>About</a>
            <button className='mt-4'>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar