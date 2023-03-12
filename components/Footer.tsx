import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <div className='max-w-[1240px] mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-5'>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green inline-block my-4'>Products</h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green inline-block my-4'>Offices</h3>
          <ul>
            <li>Amsterdam</li>
            <li>New York</li>
            <li>Sydney</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green inline-block my-4'>Team</h3>
          <ul>
            <li>Development</li>
            <li>Operations</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green inline-block my-4'>Contact</h3>
          <ul>
            <li>Newsletters</li>
            <li>Blog</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-xl border-b-4 border-green inline-block my-4'>Careers</h3>
          <ul>
            <li>Internships</li>
            <li>Early Career</li>
            <li>Job Board</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer