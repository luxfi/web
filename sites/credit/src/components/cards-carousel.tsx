'use client'

import React, { useEffect, useState } from 'react'

import { ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'
import { AddToCartWidget, useCommerce } from '@hanzo/commerce'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import type { ImageDef } from '@hanzo/ui/types'
import type { LineItem } from '@hanzo/commerce/types'
import Link from 'next/link'

type Card = {
  family: string
  title: string
  byline: string
  skuPath: string
  label?: string
  img: ImageDef
}

const CardComponent: React.FC<{
  card: Card
  current: number
  index: number
}> = ({
  card,
  current,
  index
}) => {
  const {family, title, byline, skuPath, img} = card
  
  const cmmc = useCommerce()
  const [lineItem, setLineItem] = useState<LineItem>()

  useEffect(() => {
    cmmc.selectPath(skuPath)
    setLineItem(cmmc.selectedItems.find(item => item.sku === skuPath))
  }, [])

  return (
    <div className='flex flex-col gap-5 items-center h-full'>
      <ImageBlockComponent
        block={{blockType: 'image',
          props: {
            style: {
              width: '100%',
              height: 'auto'
            }
          },
          ...img
        } as ImageBlock}
        className={cn(
          'mx-auto aspect-[1.58577251]',
          current !== index ? 'cursor-pointer' : ''
        )}
      />
      <Link href={`cards/${family}?sku=${skuPath}`} className='flex flex-col items-center !no-underline'>
        <div className='font-heading text-center text-xs sm:text-lg md:text-sm 2xl:text-base'>{title}</div>
        <p className='text-sm'>{byline}</p>
      </Link>
      {lineItem && <AddToCartWidget item={lineItem} className='mx-auto' buttonClx='h-8'/>}
    </div>
)
}

const CardsCarousel: React.FC<{
  cards: Card[]
}> = ({
  cards
}) => {
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
    <Carousel
      setApi={setApi} 
      options={{ align: 'center', loop: true }}
      className='w-full'
    >
      <CarouselContent>
        {cards.map((card: Card, index) => (
          <CarouselItem key={index} className='basis-3/4 md:basis-1/3 xl:basis-1/5' onClick={() => selectCard(index)}>
            <CardComponent card={card} current={current} index={index}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CardsCarousel