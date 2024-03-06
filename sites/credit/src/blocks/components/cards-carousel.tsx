'use client'

import React, { useState } from 'react'

import { ImageBlockComponent, type BlockComponentProps, type ImageBlock } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import type CardsCarouselBlock from '../def/cards-carousel'
import ArrowLeft from './icons/arrow-left'
import ArrowRight from './icons/arrow-right'

const CardsCarouselBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'cards-carousel') {
    return <>cards carousel block required</>
  }

  const b = block as CardsCarouselBlock

  const [slide, setSlide] = useState(b.defaultSlide ?? 0)
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
    if (isLeftSwipe && slide < b.slides.length - 1) {
      setSlide((slide + 1) % b.slides.length)
    }
    else if (isRightSwipe && slide > 0) {
      setSlide((slide - 1) % b.slides.length)
    }
  }

  const slideTranslate = (slide: number) => {
    let startTranslate = 0
    if (b.slides.length % 2 === 0) {
      startTranslate = 50
    }
    const multiplier = b.defaultSlide - slide
    const translatePr = Math.abs(startTranslate + (multiplier * 100)) 
    return `${multiplier < 0 ? '-' : ''}${translatePr}%`
  }
  
  return (
    <div className='w-full flex flex-col gap-10 items-center overflow-hidden'>
      <div className='flex overflow-hidden' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {b.slides.map(({img}, index) => (
          <div
            key={index}
            style={{ transform: `translateX(${slideTranslate(slide)})` }}
            className='flex duration-700 ease-in-out transition-all transform max-w-[50rem]'
          >
            <ImageBlockComponent className='h-full max-h-[30rem]' block={img as ImageBlock}/>
          </div>
        ))}
      </div>

      <div className='flex w-full text-nowrap justify-between items-center'>
        {slide > 0 ? (
          <div className='flex gap-8 font-nav cursor-pointer' onClick={() => setSlide(slide - 1)}>
            <ArrowLeft className='w-full max-w-12'/>
            <h6 className='hidden lg:block'>{b.slides[slide - 1].title}</h6>
          </div>
        ) : <div/>}

        <h6 className='absolute left-1/2 transform -translate-x-1/2 font-nav'>
          {b.slides[slide].title}
        </h6>

        {slide < b.slides.length - 1 ? (
          <div className='flex gap-8 font-nav cursor-pointer' onClick={() => setSlide(slide + 1)}>
            <h6 className='hidden lg:block'>{b.slides[slide + 1].title}</h6>
            <ArrowRight className='w-full max-w-12'/>
          </div>
        ) : <div/>}
      </div>
    </div>
  )
}

export default CardsCarouselBlockComponent