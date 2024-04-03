'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@hanzo/ui/util'
import { ApplyTypography, Card as CardComponent, Main } from '@hanzo/ui/primitives'
import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { AddToCartWidget, formatCurrencyValue } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import type { Card, CardMaterial } from '@/types/card'
import SplinePlayer from '../spline-player'
import Benefits from './benefits'

const DesktopViewCardDetails: React.FC<{
  card: Card
  setCard: (card: Card) => void
  lineItem: LineItem
  selectedMaterial: CardMaterial
  setSelectedMaterial: (material: CardMaterial) => void
  clx?: string
}> = ({
  card,
  setCard,
  lineItem,
  selectedMaterial,
  setSelectedMaterial,
  clx
}) => {
  const router = useRouter()

  const [showAnimation, setShowAnimation] = useState<boolean>(true)
  const [currentAnimation, setCurrentAnimation] = useState<string>(selectedMaterial.animation)

  // Smooth transition between animations when changing material
  const changeSelectedMaterial = (material: CardMaterial) => {
    if (material.title === selectedMaterial.title) {
      return
    }

    setSelectedMaterial(material)
    setShowAnimation(false)
    setTimeout(() => {
      setCurrentAnimation(material.animation)
      setTimeout(() => {
        setShowAnimation(true)
      }, 100)
    }, 300)
  }

  return (
    <Main className={cn('flex flex-col gap-20', clx)}>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-1 items-center cursor-pointer' onClick={() => router.push('/cards')}>
          <ChevronLeft/>
          <div>View All Cards</div>
        </div>
        <ApplyTypography className='grid grid-cols-7'>
          <div className='flex flex-col col-span-2 items-center gap-3'>
            <h3 className='!text-2xl self-start'>{card.title}</h3>
            <div className={cn(
                'w-full max-w-72 aspect-square transition-all duration-300',
                showAnimation ? 'opacity-100' : 'opacity-0',
              )}
            >
              <SplinePlayer src={currentAnimation} className='!aspect-[12/10]'/>
            </div>
            <div className='flex gap-1 sm:gap-2 justify-center'>
              {card.materials.map(({title, materialImg}, i) => (
                <div
                  key={i}
                  className={cn(
                    'cursor-pointer rounded-full p-0.5',
                    title === selectedMaterial?.title && 'outline outline-2 outline-foreground'
                  )}
                  onClick={() => changeSelectedMaterial(card.materials[i])}
                >
                  <ImageBlockComponent
                    block={{blockType: 'image', ...materialImg}}
                    className='h-10 w-10'
                  />
                </div>
              ))}
            </div>
            <p className='text-sm'>{selectedMaterial?.title}</p>
            <div className='flex justify-center gap-2 text-sm w-full'>
              <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
              <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
            </div>
            {lineItem && <AddToCartWidget item={lineItem} className='w-fit mx-auto'/>}
          </div>
          <div className='flex flex-col gap-4 col-span-5'>
            {card.cardDetails.description}
            <div className='grid grid-flow-col gap-3'>
              {card.cardDetails.karma.map((reward, i) => (
                <CardComponent key={i} className='flex flex-col gap-1 items-center p-3'>
                  <h4 className='!text-5xl'>{reward.multiplier}x</h4>
                  <p className='!text-center text-xxs lg:text-xs'>KARMA POINTS</p>
                  <h4 className='!text-center !text-base lg:!text-xl'>{reward.title}</h4>
                  <p className='!text-center text-xs lg:text-sm'>{reward.description}</p>
                </CardComponent>
              ))}
            </div>
            <Benefits card={card} clx='mt-14'/>
          </div>
        </ApplyTypography>
      </div>
    </Main>
  )
}

export {
  DesktopViewCardDetails as default
}