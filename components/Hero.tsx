import React from 'react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        autoPlay
        loop
        muted
        className='object-cover w-full h-full absolute'
      >
        <source src='video.mp4' type='video/mp4' />
        <div className=' backdrop-brightness-50'>
          <h1>Decentralized</h1>
        </div>
      </video>
    </div>
  )
}

export default Hero