import React from 'react'

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <div className='w-full text-white bg-black text-center py-8 pb-16'>
      <h1 id='connect' className='mb-8'>Connect with us</h1>
      <div>
        <input type="email" placeholder='Enter your email' className='font-light text-lg p-4 rounded-3xl mr-4' />
        <button className='ml-4'>Sign up</button>
      </div>
      <div className='flex justify-center items-center py-2'>
        <input type="checkbox" className='mr-2' />
        <p className='font-light text-lg py-4'>Yes, I agree to receive email communications from TRADING.</p>
      </div>
    </div>
  )
}

export default Subscribe