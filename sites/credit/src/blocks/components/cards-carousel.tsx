'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { type BlockComponentProps, CTABlockComponent } from '@hanzo/ui/blocks'

import type CardsCarouselBlock from '../def/cards-carousel'
import { Carousel, CarouselContent, CarouselItem } from '@hanzo/ui/primitives'
import type { CarouselApi } from '@hanzo/ui/primitives/carousel'
import { cn } from '@hanzo/ui/util'

const CardsCarouselBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'cards-carousel') {
    return <>cards carousel block required</>
  }

  const b = block as CardsCarouselBlock

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const selectCard = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div className='w-full flex flex-col gap-10 items-center overflow-hidden'>
      <Carousel
        setApi={setApi} 
        options={{ align: 'center', loop: true }}
        className='w-full'
      >
        <CarouselContent>
          {b.slides.map(({img, title, byline, cta}, index) => (
            <CarouselItem key={index} className='basis-3/4 lg:basis-2/3' onClick={() => selectCard(index)}>
              <div className='flex flex-col gap-5 items-center'>
                <Image
                  src={img.src}
                  width={img.dim.w}
                  height={img.dim.h}
                  alt={img.alt ?? title}
                  className={cn('mx-auto', current !== index ? 'cursor-pointer' : '')}
                />
                <div className='flex flex-col items-center'>
                  <div className='font-heading text-center text-sm sm:text-lg md:text-3xl'>{title}</div>
                  <p>{byline}</p>
                </div>
                <CTABlockComponent block={cta}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CardsCarouselBlockComponent