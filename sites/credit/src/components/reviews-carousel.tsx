'use client'

import { useEffect, useRef, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { Carousel, CarouselContent, CarouselItem } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import Link from 'next/link'
import Quote from './icons/quote'
import type { CarouselApi } from '@hanzo/ui/primitives/carousel'
import type { Review } from '@/types'

const ReviewComponent: React.FC<{
  review: Review
}> = ({
  review,
}) => {
  const {author, image, text, title, href} = review

  return (
    <div className='flex gap-4 sm:gap-8 mx-auto px-4'>
      <ImageBlockComponent block={{blockType: 'image', ...image}} className='w-20 h-20 rounded-full'/>
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

const ReviewsCarousel: React.FC<{
  reviews: Review[]
  autostart?: boolean
}> = ({
  reviews,
  autostart
}) => {
  // TODO: add Autoplay to hanzo/ui
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const selectCard = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div className='w-full flex flex-col gap-6 sm:gap-10 items-center overflow-hidden'>
      <Carousel
        setApi={setApi}
        plugins={autostart ? [plugin.current] : []}
        options={{
          align: 'start',
          loop: true,
        }}
        className='w-full mx-auto max-w-[50rem]'
      >
        <CarouselContent>
          {reviews.map((review: Review, index) => (
            <CarouselItem key={index}>
              <ReviewComponent review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='flex gap-2 justify-center'>
        {reviews.map((_, index) => (
          <div
            key={index}
            className={cn('w-3 h-3 rounded-full border border-foreground cursor-pointer', current === index ? 'bg-foreground' : '')}
            onClick={() => selectCard(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsCarousel