'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

import { formatCurrencyValue } from '@hanzo/commerce'
import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import { ApplyTypography, Main } from '@hanzo/ui/primitives'

import type { Card, CardMaterial } from '@/types/card'

const CardPreview: React.FC<{
  key: number | string
  card: Card
}> = ({
  key,
  card,
}) => {
  const router = useRouter()
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>(card.materials[0])

  if (!selectedMaterial) {
    return null
  }

  return (
    <Main className='grid grid-cols-5 gap-1'>
      <div className='flex flex-col gap-2 col-span-2 items-center'>
        <ImageBlockComponent block={{blockType: 'image', ...selectedMaterial.cardImg}} className='w-pr-90'/>
        <p className='text-xxs sm:text-xs'>{selectedMaterial.title}</p>
      </div>
      <div className='flex flex-col justify-between col-span-3 sm:p-3'>
        <div
          className='flex justify-between items-center cursor-pointer'
          onClick={() => router.push(`/cards/${card.category}?sku=${selectedMaterial.sku}`)}
        >
          <ApplyTypography className='flex flex-col !gap-0'>
            <span className='text-xs sm:text-base'>Lux Partners</span>
            <h3 className='!text-xs sm:!text-lg'>{card.title}</h3>
          </ApplyTypography>
          <ArrowRight/>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='flex gap-1 sm:gap-2 justify-center'>
            {card.materials.map(({title, materialImg}, i) => (
              <div
                key={i}
                className={cn(
                  'cursor-pointer rounded-full p-0.5',
                  title === selectedMaterial?.title && 'outline outline-1 outline-foreground'
                )}
                onClick={() => setSelectedMaterial(card.materials[i])}
              >
                <ImageBlockComponent
                  block={{blockType: 'image', ...materialImg}}
                  className='h-6 w-6 sm:h-10 sm:w-10'
                />
              </div>
            ))}
          </div>

          <div className='flex flex-col text-xxs sm:text-xs ml-auto'>
            <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
            <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
          </div>    
        </div>
      </div>
    </Main>
  )
}

export {
  CardPreview as default
}