'use client'

import React, { useState } from 'react'

import { ImageBlockComponent, type BlockComponentProps, type ImageBlock } from '@hanzo/ui/blocks'
import type ReviewBlock from '../def/reviews'
import { cn } from '@hanzo/ui/util'
import type { ImageDef } from '@hanzo/ui/types'
import Quote from './icons/quote'

const Review: React.FC<{
  image: ImageDef,
  title: string,
  text: string,
  author: string
}> = ({image, title, text, author}) => {
  return (
    <div className='flex gap-4 sm:gap-8 mx-auto'>
      <ImageBlockComponent block={image as ImageBlock} className='w-20 h-20 rounded-full'/>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 sm:gap-6'>
          <Quote className='h-6 sm:h-9'/>
          <h5>{title}</h5>
        </div>
        <p className='text-xs sm:text-base'>{text}</p>
        <p>-{author}</p>
      </div>
    </div>
  )
}

const ReviewsBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'review') {
    return <>review block required</>
  }

  const b = block as ReviewBlock

  const [slide, setSlide] = useState(0)

  return (
    <div className='w-full flex flex-col gap-6 sm:gap-10 items-center'>
      {b.reviews.map(({image, title, text, author}, index) => (
        <div
          key={index}
          className={cn('flex duration-700 ease-in-out transition-all transform max-w-[50rem]', slide === index ? '' : 'absolute opacity-0')}
        >
          <Review image={image} title={title} text={text} author={author}/>
        </div>
      ))}

      <div className='flex gap-2 justify-center'>
        {b.reviews.map((_, index) => (
          <div
            key={index}
            className={cn('w-3 h-3 rounded-full border border-foreground cursor-pointer', slide === index ? 'bg-foreground' : '')}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsBlockComponent