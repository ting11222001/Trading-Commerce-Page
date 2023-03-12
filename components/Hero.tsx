import React from 'react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        autoPlay
        loop
        muted
        className='object-cover w-full h-full absolute -z-10'
      >
        <source src='video.mp4' type='video/mp4' />

      </video>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4'>
        <h1>Proprietary</h1>
        <h1 className='py-2'><span className='text-green'>algorithmic</span> trading</h1>
        <p className='text-xl py-4'>Leading liquidity trading for millions of users</p>
        <div className='flex'>
          <button className='m-2'>Learn more</button>
          <button className='m-2'>FAQ</button>
        </div>
      </div>
    </div>
  )
}

export default Hero