import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { AddToCartWidget, formatCurrencyValue, useCommerce } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import type { Card, CardMaterial, CardWithSelectedMaterial } from '@/types'
import CardMaterialPicker from '@/components/card-material-picker'

const CardHero: React.FC<{
  card: Card
  selectedCards: CardWithSelectedMaterial[]
  setSelectedCards: (cards: CardWithSelectedMaterial[]) => void
  hiddenOnMobile?: boolean
  condensed?: boolean
}> = ({
  card,
  selectedCards,
  setSelectedCards,
  hiddenOnMobile,
  condensed
}) => {
  const cmmc = useCommerce()
  const [lineItem, setLineItem] = useState<LineItem>()

  const changeSelectedMaterial = (material: CardMaterial) => {
    setSelectedCards(selectedCards.map(selectedCard => {
      if (selectedCard.title === card.title) {
        return {
          ...selectedCard,
          selectedMaterial: material
        }
      }
      return selectedCard
    }))
  }

  const selectedMaterial = selectedCards.find(c => c.title === card.title)?.selectedMaterial

  useEffect(() => {
    if (selectedMaterial) {
      cmmc.selectPath(selectedMaterial.sku)
      setLineItem(cmmc.selectedItems.find(item => item.sku === selectedMaterial.sku))
    }
  }, [selectedMaterial])

  if (!selectedMaterial) {
    return null
  }

  if (condensed) {
    return (
      <div
        className={cn(
          hiddenOnMobile ? 'hidden lg:flex' : 'flex',
          'flex-col gap-3 lg:col-span-3 items-center'
        )}
      >
        <div className='flex gap-2 items-center'>
          <ImageBlockComponent
            block={{blockType: 'image', ...selectedMaterial?.cardImg}}
            className='h-8 w-auto'
          />
          <h6 className='font-heading text-xs xl:text-base'>{card.title}</h6>
        </div>
        {lineItem && <AddToCartWidget item={lineItem} className='w-fit'/>}
      </div>
    )
  }

  return (
    <ApplyTypography
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'flex-col lg:col-span-3 gap-2 items-center text-center'
      )}
    >
      <div key='one' className='flex flex-col gap-2 h-full justify-between'>
        <div className='relative flex gap-2 items-center'>
          <ImageBlockComponent
            block={{blockType: 'image', ...selectedMaterial.cardImg}}
            className='w-pr-80'
          />
          <Button
            variant='outline'
            size='icon'
            onClick={() => {setSelectedCards(selectedCards.filter(c => c.title !== card.title))}}
            className='group absolute rounded-full w-6 h-6 -right-2 top-2 sm:-right-1 sm:top-1 sm:w-7 sm:h-7'
          >
            <X className='text-muted group-hover:text-foreground w-4 h-4 sm:w-5 sm:h-5'/>
          </Button>
        </div>
        <h6 className='font-heading text-xs'>{card.title}</h6>
      </div>
      <div key='two' className='relative flex flex-col gap-4 items-center justify-end'>
        <div key='one' className='flex flex-col items-center text-xxs sm:text-base'>
          <div key='one'><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
          <div key='two'><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
        </div>
        <div key='two' className='flex flex-col gap-2 items-center'>
          <CardMaterialPicker
            materials={card.materials}
            selectedMaterial={selectedMaterial}
            onChange={changeSelectedMaterial}
          />
          <p className='text-xxs sm:text-xs'>{selectedMaterial?.title}</p>
        </div>
        {lineItem && <AddToCartWidget item={lineItem}/>}
      </div>
    </ApplyTypography>
  )
}

export default CardHero