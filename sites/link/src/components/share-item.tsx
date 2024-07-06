'use client'

import React from 'react'
import * as Icons from 'lucide-react'
import Link from "next/link";



const ShareItem: React.FC<{
  link: string
  title: string
  icon: React.ReactNode
}>  = ({
  link,
  title,
  icon
}) => {
  return (
    <>
      <div
        className='w-full rounded-sm hover:bg-[#F0F0F0]/10 cursor-pointer py-2'
        style={{transition: 'transform 0.25s cubic-bezier(0, 0.2, 0.5, 3) 0s'}}
      >
        <Link href={link}>
          <div className='flex justify-between px-2'>
            <div className='flex gap-4 items-center'>
              {icon}
              <p className='text-white'>{title}</p>
            </div>
            <Icons.ArrowRight className='my-auto'/>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ShareItem
