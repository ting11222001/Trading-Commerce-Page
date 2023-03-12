import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

type Props = {}

const About = (props: Props) => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 bg-black text-white text-center'>
      <div>
        <h1 className='py-4'>ACCESS OUR LIQUIDITY</h1>
        <p className='font-light text-lg py-4'>
          As a technology-driven trading firm we develop innovative technology and algorithms to trade in all major asset classes on more than 100 trading venues around the world.
        </p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='flex flex-col border-2'>
            <div><SiHiveBlockchain /></div>
            <h3 className='text-2xl py-4'>Where cutting edge technology meets trading </h3>
            <p className='font-light text-lg py-4'>We are as much a technology firm as a trading house. We invest significant time and resources to ensure our traders have the best tools for the job.</p>
          </div>
          <p>card</p>
          <p>card</p>
          <p>card</p>
        </div>
      </div>
    </div>
  )
}

export default About