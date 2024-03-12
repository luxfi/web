'use client'

import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { type BlockComponentProps, type ImageBlock, ImageBlockComponent } from '@hanzo/ui/blocks'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import Link from 'next/link'
import Quote from './icons/quote'
import type { Review, ReviewsCarouselBlock } from '../def/reviews-carousel'

const ReviewComponent: React.FC<{
  review: Review
}> = ({
  review,
}) => {
  const {author, image, text, title, href} = review

  return (
    <div className='flex gap-4 sm:gap-8 mx-auto px-4'>
      <ImageBlockComponent block={image as ImageBlock} className='w-20 h-20 rounded-full'/>
      <div className='flex flex-col sm:gap-2'>
        <div className={cn('flex gap-2 sm:gap-6', href ? 'cursor-pointer' : '')}>
          <Quote className='h-6 sm:h-9'/>
          {href ? (
            <Link href={href} target='_blank' className='!no-underline'>
              <h5>{title}</h5>
            </Link>
          ) : (
            <h5>{title}</h5>
          )}
        </div>
        <p className='text-sm sm:text-base'>{text}</p>
        <p>-{author}</p>
      </div>
    </div>
  )
}

const ReviewsCarouselBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'reviews-carousel') {
    return <>reviews carousel block required</>
  }

  const b = block as ReviewsCarouselBlock

  const autostartSlideshow = b.specifiers?.includes('autostart-slideshow')

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={autostartSlideshow ? [plugin.current] : []}
      options={{
        align: 'start',
        loop: true,
      }}
      className='w-full max-w-[50rem]'
    >
      <CarouselContent>
        {b.slides.map((slide, index) => (
          <CarouselItem key={index}>
            <ReviewComponent review={slide} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:flex' />
      <CarouselNext className='hidden md:flex' />
    </Carousel>
  )
}

export default ReviewsCarouselBlockComponent