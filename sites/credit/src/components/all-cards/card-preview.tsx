'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

import { AddToCartWidget, formatCurrencyValue, useCommerce } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'
import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import { Accordion, AccordionContent, AccordionItem, ApplyTypography, Button } from '@hanzo/ui/primitives'

import type { Card, CardMaterial } from '@/types/card'
import CardQuickView from './card-quick-view'

const CardPreview: React.FC<{
  key: number | string
  card: Card
}> = ({
  key,
  card,
}) => {
  const router = useRouter()
  const cmmc = useCommerce()
  const [showQuickView, setShowQuickView] = useState<boolean>(false)
  const [lineItem, setLineItem] = useState<LineItem>()
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>(card.materials[0])

  useEffect(() => {
    if (selectedMaterial) {
      cmmc.selectPath(selectedMaterial.sku)
      setLineItem(cmmc.selectedItems.find(item => item.sku === selectedMaterial.sku))
    }
  }, [selectedMaterial])

  if (!selectedMaterial) {
    return null
  }

  return (
    <div className='flex flex-col gap-10'>
      <div key={key} className='grid grid-cols-4 gap-10'>
        <div className='flex flex-col gap-4 items-center col-span-1'>
          <ImageBlockComponent
            block={{blockType: 'image', ...selectedMaterial.cardImg}}
            className='w-pr-80'
          />
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-4 justify-center'>
              {card.materials.map(({title, materialImg}, i) => (
                <div
                  key={i}
                  className={cn(
                    'cursor-pointer rounded-full p-1',
                    title === selectedMaterial?.title && 'outline outline-2 outline-foreground'
                  )}
                  onClick={() => setSelectedMaterial(card.materials[i])}
                >
                  <ImageBlockComponent
                    block={{blockType: 'image', ...materialImg}}
                    className='h-10 w-10'
                  />
                </div>
              ))}
            </div>
          </div>
          {lineItem && <AddToCartWidget item={lineItem} className='w-fit'/>}
        </div>

        <div className='flex flex-col gap-10 col-span-2'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-heading text-xl'>{card.title}</h3>
            <p className='text-sm'>{selectedMaterial?.title}</p>
            <div className='flex flex-col text-sm'>
              <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
              <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
            </div>
          </div>
          <ApplyTypography className='flex flex-col !gap-2'>
            {card.preview}
          </ApplyTypography>
        </div>

        <div className='flex flex-col gap-4 col-span-1'>
          <ApplyTypography className='flex flex-col !gap-2 typography-p:text-sm'>
            {card.karmaRewards}
          </ApplyTypography>
          <div className='flex flex-col-reverse xl:flex-row gap-2'>
            <Button
              variant='outline'
              onClick={() => setShowQuickView(!showQuickView)}
              className='flex gap-1 items-center w-full !min-w-0 !text-xs lg:!text-base'
            >
              Quick View
              <ChevronDown className={cn('transition-all h-5 w-5', showQuickView ? 'rotate-180' : '')}/>
            </Button>
            <Button
              variant='outline'
              onClick={() => router.push(`/compare?cards=${selectedMaterial.sku}`)}
              className='w-full !min-w-0 !text-xs lg:!text-base'
            >
              Compare
            </Button>
          </div>
        </div>
      </div>

      <Accordion
        type='single'
        collapsible
        value={showQuickView ? 'quickView' : ''}
      >
        <AccordionItem value='quickView'>
          <AccordionContent>
            <CardQuickView card={card} selectedMaterial={selectedMaterial}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export {
  CardPreview as default
}