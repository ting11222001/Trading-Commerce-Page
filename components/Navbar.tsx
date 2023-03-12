import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between">
        <div>
          <h1 className='text-blue'>Trading.co</h1>
        </div>
        <div>
          <ul>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
          </ul>
          <button>Use Trading.co</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar