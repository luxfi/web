'use client'

import React, { useState } from 'react'

import { ImageBlockComponent, type BlockComponentProps, type ImageBlock } from '@hanzo/ui/blocks'
import type ReviewBlock from '../def/reviews'
import { cn } from '@hanzo/ui/util'
import type { ImageDef } from '@hanzo/ui/types'
import Quote from './icons/quote'
import Link from 'next/link'

const Review: React.FC<{
  image: ImageDef,
  title: string,
  text: string,
  author: string,
  href?: string
}> = ({image, title, text, author, href}) => {
  return (
    <div className='flex gap-4 sm:gap-8 mx-auto'>
      <ImageBlockComponent block={image as ImageBlock} className='w-20 h-20 rounded-full'/>
      <div className='flex flex-col gap-2'>
        <div className={cn('flex gap-2 sm:gap-6', href ? 'cursor-pointer' : '')}>
          <Quote className='h-6 sm:h-9'/>
          {href ? <Link href={href} target='_blank' className='!no-underline'><h5>{title}</h5></Link> : <h5>{title}</h5>}
        </div>
        <p className='text-sm sm:text-base'>{text}</p>
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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe && slide < b.reviews.length - 1) {
      setSlide((slide + 1) % b.reviews.length)
    }
    else if (isRightSwipe && slide > 0) {
      setSlide((slide - 1) % b.reviews.length)
    }
  }

  return (
    <div className='w-full flex flex-col gap-6 sm:gap-10 items-center' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {b.reviews.map(({image, title, text, author, href}, index) => (
        <div
          key={index}
          className={cn('flex duration-700 ease-in-out transition-all transform max-w-[50rem]', slide === index ? '' : 'absolute opacity-0')}
        >
          <Review image={image} title={title} text={text} author={author} href={href}/>
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