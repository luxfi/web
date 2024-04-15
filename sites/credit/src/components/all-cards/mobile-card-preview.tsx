'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

import { formatCurrencyValue } from '@hanzo/commerce'
import { ImageBlockComponent } from '@hanzo/ui/blocks'

import type { Card, CardMaterial } from '@/types/card'
import CardMaterialPicker from '../card-material-picker'

const CardPreview: React.FC<{
  card: Card
}> = ({
  card,
}) => {
  const router = useRouter()
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>(card.materials[0])

  if (!selectedMaterial) {
    return null
  }

  return (
    <div className='grid grid-cols-5 gap-2 py-5 px-4'>
      <div className='flex flex-col gap-2 col-span-2 items-center'>
        <ImageBlockComponent block={{blockType: 'image', ...selectedMaterial.cardImg}} className='w-pr-90'/>
        <p className='text-xxs sm:text-xs'>{selectedMaterial.title}</p>
      </div>
      <div className='flex flex-col h-auto justify-between col-span-3 sm:p-3'>
        <div
          className='flex justify-between items-center cursor-pointer'
          onClick={() => router.push(`/cards/${card.category}?sku=${selectedMaterial.sku}`)}
        >
          <span className='sm:!text-lg'>{card.title}</span>
          <ArrowRight/>
        </div>
        <div className='flex gap-2 items-center'>
          <CardMaterialPicker
            materials={card.materials}
            selectedMaterial={selectedMaterial}
            onChange={setSelectedMaterial}
            materialClx='h-5 w-5 sm:h-9 sm:w-9'
          />
          <div className='flex flex-col text-xxs sm:text-xs ml-auto'>
            <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
            <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export {
  CardPreview as default
}