import React from 'react';

type Props = {}

const Developer = (props: Props) => {
  return (
    <div className='w-full text-white bg-black text-center py-32'>
      <div id='why' className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Why trade with us</h1>
          <p className='font-light text-lg py-8 pr-4'>
            We make markets in multiple asset classes across <span className='text-green'>over 100</span> trading venues worldwide. We have <span className='text-green'>30 years</span> of industry-leading experience combining technology, market knowledge, and advanced risk management.
          </p>
        </div>
        <div className='flex justify-center w-full'>
          <img src='trade.png' alt="/" className='max-w-[250px] shadow-lg shadow-green' />
        </div>
      </div>
    </div>
  )
}

export default Developer