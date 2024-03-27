import { X } from 'lucide-react'

import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { BuyItemButton, formatPrice } from '@hanzo/commerce'

import type { Card, CardMaterial } from '@/types/card'
import type { CardWithSelectedMaterial } from '../index'

const CardHero: React.FC<{
  key: number | string
  card: Card
  selectedCards: CardWithSelectedMaterial[]
  setSelectedCards: (cards: CardWithSelectedMaterial[]) => void
  hiddenOnMobile?: boolean
  condensed?: boolean
}> = ({
  key,
  card,
  selectedCards,
  setSelectedCards,
  hiddenOnMobile,
  condensed
}) => {

  const changeCardMaterial = (card: Card, material: CardMaterial) => {
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

  if (!selectedMaterial) {
    return null
  }

  if (condensed) {
    return (
      <div
        className={cn(
          hiddenOnMobile ? 'hidden lg:flex' : 'flex',
          'flex-col gap-2 lg:col-span-3'
        )}
      >
        <div className='flex gap-2 self-start items-center'>
          <ImageBlockComponent
            block={{blockType: 'image', ...selectedMaterial?.cardImg}}
            className='h-8 w-auto'
          />
          <h6 className='font-nav text-xs xl:text-base'>{card.title}</h6>
        </div>
        <BuyItemButton 
          skuPath={selectedMaterial.sku} 
          popupClx='w-[340px]' 
          className='w-full'
          size='xs'
        >
          Add +
        </BuyItemButton>
      </div>
    )
  }

  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'flex-col lg:col-span-3 gap-2 items-center text-center'
      )}
    >
      <div className='flex flex-col gap-2 h-full justify-between'>
        <div className='relative flex gap-2 items-center'>
          <ImageBlockComponent
            block={{blockType: 'image', ...selectedMaterial.cardImg}}
            className='w-pr-80'
          />
          <Button
            variant='outline'
            size='icon'
            onClick={() => setSelectedCards(selectedCards.filter(c => c.title !== card.title))}
            className='absolute rounded-full w-6 h-6 -right-4 sm:-right-5 lg:-right-6 sm:w-9 sm:h-9'
          >
            <X className='w-4 h-4 sm:w-6 sm:h-6'/>
          </Button>
        </div>
        <h6 className='font-nav text-xs'>{card.title}</h6>
      </div>
      <div className='relative flex flex-col gap-4 items-center justify-end'>
        <div className='flex flex-col items-center text-xxs sm:text-base'>
          <div><span className='font-bold'>Annual Fee:</span> {formatPrice(card.annualFee)}</div>
          <div><span className='font-bold'>Initiation Fee:</span> {formatPrice(card.initiationFee)}</div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex gap-4 justify-center'>
            {card.materials.map(({title, materialImg}, i) => (
              <div
                key={i}
                className={cn('cursor-pointer rounded-full p-1', title === selectedMaterial?.title && 'outline outline-2 outline-foreground')}
                onClick={() => changeCardMaterial(card, card.materials[i])}
              >
                <ImageBlockComponent
                  block={{blockType: 'image', ...materialImg}}
                  className='h-10 w-10'
                />
              </div>
            ))}
          </div>
          <p className='text-xxs sm:text-xs'>{selectedMaterial?.title}</p>
        </div>
        <BuyItemButton 
          skuPath={selectedMaterial.sku} 
          popupClx='w-[340px]' 
          className='w-full max-w-72'
        >
          Add +
        </BuyItemButton>
      </div>
    </ApplyTypography>
  )
}

export default CardHero