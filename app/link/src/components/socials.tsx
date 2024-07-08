import React  from 'react'
import {socials} from "@/socials";

const Socials = () => (<>
    <div className='w-full flex gap-4 justify-center my-8'>
      {socials.map((link) => (
        <a
          key={link.name} href={link.url} target='_blank' rel='noreferrer'
          className='hover:scale-105 cursor-pointer'
          style={{ transition: 'transform 0.25s cubic-bezier(0, 0.2, 0.5, 3) 0s'}}
        >
          {link.icon}
        </a>
      ))}
    </div>
  </>)


export default Socials
