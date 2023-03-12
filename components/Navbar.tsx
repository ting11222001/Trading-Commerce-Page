import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-blue'>Trading.co</h1>
        </div>
        <div>
          <ul className='flex text-white items-center'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='text-white ml-4'>Use Trading.co</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar