'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

import { ImageBlockComponent, type ImageBlock, CTABlockComponent, type CTABlock } from '@hanzo/ui/blocks'
import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { formatPrice } from '@hanzo/commerce'

import type { Card } from '@/types/card'

const CardHero: React.FC<{
  key: number | string
  card: Card
  selectedCards: Card[]
  setSelectedCards: (cards: Card[]) => void
  hiddenOnMobile?: boolean
}> = ({
  key,
  card,
  selectedCards,
  setSelectedCards,
  hiddenOnMobile
}) => {
  const [selectedMaterial, setSelectedMaterial] = useState(card?.materials[0])

  useEffect(() => {
    if (card) {
      setSelectedMaterial(card.materials[0])
    }
  }, [card])

  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'flex-col lg:col-span-3 gap-2 items-center text-center'
      )}
    >
      <div className='relative flex gap-2 items-center'>
        <ImageBlockComponent
          block={{blockType: 'image', 
              src: card.img, dim: {w: 700, h: 441 },
              alt: card.title
            } as ImageBlock
          }
          className='w-pr-80'
        />
        <Button
          variant='outline'
          size='icon'
          onClick={() => setSelectedCards(selectedCards.filter(c => c.title !== card.title))}
          className='absolute rounded-full -right-4 w-6 h-6 sm:-right-5 sm:w-9 sm:h-9'
        >
          <X className='w-4 h-4 sm:w-6 sm:h-6'/>
        </Button>
      </div>
      <h6 className='font-nav text-xs'>{card.title}</h6>
      <div className='flex flex-col items-center text-xxs sm:text-base'>
        <div><span className='font-bold'>Annual Fee:</span> {formatPrice(card.annualFee)}</div>
        <div><span className='font-bold'>Initiation Fee:</span> {formatPrice(card.initiationFee)}</div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h5 className='hidden sm:block text-base'>Choose Your Design</h5>
        <div className='flex gap-4 justify-center'>
          {card.materials.map(({title, img}, i) => (
            <div
              key={i}
              className={cn('cursor-pointer rounded-full p-1', title === selectedMaterial?.title && 'outline outline-2 outline-foreground')}
              onClick={() => setSelectedMaterial(card.materials[i])}
            >
              <ImageBlockComponent
                block={{blockType: 'image', 
                    src: img, dim: {w: 99, h: 99 },
                    alt: title
                  } as ImageBlock
                }
                className='h-10 w-10'
              />
            </div>
          ))}
        </div>
        <p className='text-xxs sm:text-xs'>{selectedMaterial?.title}</p>
      </div>
      <CTABlockComponent
        block={{blockType: 'cta',
          specifiers: 'fill',
          elements: [
            {title: 'Select Card', variant: 'primary', href: selectedMaterial?.url ?? ''}
          ]
        } as CTABlock}
      />
    </ApplyTypography>
  )
}

export default CardHero