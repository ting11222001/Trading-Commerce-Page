import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';
import { about } from '../constant/index';

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full bg-black text-white text-center pt-16'>
      < div className='max-w-[1240px] mx-auto px-4 py-16' >
        <div>
          <h1 id='about' className='py-4'>About us</h1>
          <p className='font-light text-lg mb-8'>
            As a technology-driven trading firm we develop innovative technology and algorithms to trade in all major asset classes on more than 100 trading venues around the world.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Card */}
            {about.map((data) => (
              <AboutCard key={data.id} icon={data.icon} title={data.title} description={data.description} />
            ))}
          </div>
          <button className='mt-8 bg-gradient-to-r from-green to-purple hover:from-pink hover:to-yellow'>Learn more</button>
        </div>
      </div >
    </div >
  )
}

export default About