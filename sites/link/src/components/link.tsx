import React  from 'react'
import { type ILink } from "@/links";
import Image from 'next/image'


const Link: React.FC<{
  link: ILink
}>  = ({
  link,
}) => {

  return (
    <div
      className='w-full max-w-[680px] rounded-[14px] bg-[#222] mx-auto my-3 hover:scale-105 cursor-pointer'
      style={{ transition: 'transform 0.25s cubic-bezier(0, 0.2, 0.5, 3) 0s'}}
    >
      <a href={link.url}>
        <div className='flex justify-between items-center'>
          <div className='p-1'>
            <Image src={link.icon} alt={link.name} height={48} width={48} className='rounded-lg'/>
          </div>
          <p className='text-white'>{link.name}</p>
          <div className='w-[56px]'></div>
        </div>
      </a>
    </div>
  )
}

export default Link
