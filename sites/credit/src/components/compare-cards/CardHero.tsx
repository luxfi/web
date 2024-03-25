'use client'

import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { useState, useEffect } from 'react'
import { type Card as CardInfo } from '../../content/compare-cards'
import { X } from 'lucide-react'
import { ImageBlockComponent, type ImageBlock, CTABlockComponent, type CTABlock } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import Link from 'next/link'
import { formatPrice } from '@hanzo/commerce'

const CardHero: React.FC<{
  key?: number | string
  card: CardInfo
  selectedCards: CardInfo[]
  setSelectedCards: (cards: CardInfo[]) => void
}> = ({
  key,
  card,
  selectedCards,
  setSelectedCards
}) => {
  const [selectedMaterial, setSelectedMaterial] = useState(card?.materials[0])

  useEffect(() => {
    if (card) {
      setSelectedMaterial(card.materials[0])
    }
  }, [card])

  return (
    <ApplyTypography key={key} className='flex flex-col lg:col-span-3 gap-2 items-center'>
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
          className='absolute rounded-full -right-5'
        >
          <X/>
        </Button>
      </div>
      <h5 className='font-nav'>{card.title}</h5>
      <div className='flex flex-col items-center'>
        <div><span className='font-bold'>Annual Fee:</span> {formatPrice(card.annualFee)}</div>
        <div><span className='font-bold'>Initiation Fee:</span> {formatPrice(card.initiationFee)}</div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h5>Choose Your Design</h5>
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
        <p className='text-xs'>{selectedMaterial?.title}</p>
      </div>
      <CTABlockComponent
        block={{blockType: 'cta',
          specifiers: 'fill',
          elements: [
            {title: 'Select Card', variant: 'primary', href: selectedMaterial?.url ?? ''}
          ]
        } as CTABlock}
      />
      <Link href=''>Offer & Benefit Terms</Link>
      <Link href=''>Rates and Fees</Link>
    </ApplyTypography>
  )
}

export default CardHero