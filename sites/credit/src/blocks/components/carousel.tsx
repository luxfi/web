'use client'

import React, { useEffect, useState } from 'react'

import { ContentComponent, type BlockComponentProps } from '@hanzo/ui/blocks'
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

  const [slide, setSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const showDots = b.specifiers && b.specifiers.includes('show-dots')
  const showOnlyCurrentSlide = b.specifiers && b.specifiers.includes('show-only-current-slide')
  const autostartSlideshow = b.specifiers && b.specifiers.includes('autostart-slideshow')
  const slidesHorizontalPadding = b.specifiers && b.specifiers.includes('slides-horizontal-padding')

  useEffect(() => {
    if (autostartSlideshow) {
      const interval = setInterval(() => {
        setSlide((slide + 1) % b.slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [slide, autostartSlideshow])

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
    if (isLeftSwipe && slide < b.slides.length - 1) {
      setSlide((slide + 1) % b.slides.length)
    }
    else if (isRightSwipe && slide > 0) {
      setSlide((slide - 1) % b.slides.length)
    }
  }

  const slideTranslate = (slide: number) => {
    let startTranslate = (b.slides.length - 1) * 50
    return `${startTranslate - (slide * 100)}%`
  }

  return (
    <div className='w-full flex flex-col gap-6 sm:gap-10 items-center overflow-hidden' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className='flex'>
        {b.slides.map((slideBlock, index) => (
          <div
            key={index}
            style={{ transform: `translateX(${slideTranslate(slide)})` }}
            className={cn(
              'flex duration-700 ease-in-out transition-all transform w-[20rem] sm:w-[30rem] md:w-[45rem]',
              index !== slide && showOnlyCurrentSlide ? 'opacity-0' : '',
              slidesHorizontalPadding ? 'px-16' : ''
            )}
          >
            <ContentComponent blocks={slideBlock} />
          </div>
        ))}
      </div>

      {showDots && (
        <div className='flex gap-2 justify-center'>
          {b.slides.map((_, index) => (
            <div
              key={index}
              className={cn('w-3 h-3 rounded-full border border-foreground cursor-pointer', slide === index ? 'bg-foreground' : '')}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselBlockComponent