'use client'

import React, { useState } from 'react'

import { type BlockComponentProps } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import type CarouselBlock from '../def/carousel'

const CarouselBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'carousel') {
    return <>carousel block required</>
  }

  const b = block as CarouselBlock

  const [slide, setSlide] = useState(b.defaultSlide ?? 0)

  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      {b.elements.map(({content}, index) => (
        <div
          key={index}
          className={cn('duration-700 ease-in-out transition-all transform max-w-[50rem] ', slide === index ? 'flex' : 'absolute opacity-0')}
        >
          {content}
        </div>
      ))}

      <div className='flex w-full text-nowrap justify-between items-center'>
      {slide > 0 ? (
        <div className='flex gap-8 font-nav cursor-pointer' onClick={() => setSlide(slide - 1)}>
          <svg viewBox="0 0 199 24" className='w-full max-w-12'>
            <path d="M0.373047 12.1152L20.373 0.568229V23.6622L0.373047 12.1152ZM18.373 10.1152L198.354 10.1152V14.1152L18.373 14.1152V10.1152Z" fill="currentColor"/>
          </svg>
          <h6 className='hidden sm:block'>{b.elements[slide - 1].title}</h6>
        </div>
      ) : <div/>}

        <h6 className='absolute left-1/2 transform -translate-x-1/2 font-nav'>
          {b.elements[slide].title}
        </h6>

        {slide < b.elements.length - 1 ? (
          <div className='flex gap-8 font-nav cursor-pointer' onClick={() => setSlide(slide + 1)}>
            <h6 className='hidden sm:block'>{b.elements[slide + 1].title}</h6>
            <svg viewBox="0 0 199 24" className='w-full max-w-12'>
              <path d="M198.354 12.1152L178.354 0.568229V23.6622L198.354 12.1152ZM180.354 10.1152L0.373047 10.1152V14.1152L180.354 14.1152V10.1152Z" fill="currentColor"/>
            </svg>
          </div>
        ) : <div/>}
      </div>
    </div>
  )
}

export default CarouselBlockComponent