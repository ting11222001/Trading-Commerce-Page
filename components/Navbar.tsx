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
          <h1 className='text-blue'>Trading.co</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li className='text-2xl'>Platform</li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>Community</li>
            <li className='text-2xl'>About</li>
          </ul>

          <button className='text-white ml-4'>Use</button>
        </div>
        {/* Hamnurger menu */}
        <div onClick={handleMenu} className='block md:hidden'>
          {menu ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile menu */}
        <div className={menu ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'} >
          <ul>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='text-white m-8'>Use Trading.co</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar