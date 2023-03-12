import React, { ReactNode } from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

type Props = {
  icon?: string;
  title?: string;
  description?: string;
}

const AboutCard = (props: Props) => {
  return (
    <div className='flex flex-col border-2 text-left rounded-2xl py-12 px-8'>
      <div>
        <div className='bg-green inline-flex p-2 rounded-full'>
          {props.icon === "SiHiveBlockchain" && (<SiHiveBlockchain size={40} />)}
          {props.icon === "SiStrapi" && (<SiStrapi size={40} className='pt-2 pr-1' />)}
          {props.icon === "SiFsecure" && (<SiFsecure size={40} className='pl-1 pr-1' />)}
          {props.icon === "VscServerProcess" && (<VscServerProcess size={40} />)}

        </div>
        <h3 className='text-2xl py-4'>{props.title}</h3>
        <p className='font-light text-lg py-4'>{props.description}</p>
      </div>
    </div>
  )
}

export default AboutCard