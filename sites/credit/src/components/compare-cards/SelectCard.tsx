import { Button, Popover, PopoverContent, PopoverTrigger } from '@hanzo/ui/primitives'
import { cards, type Card as CardInfo } from '../../content/compare-cards'
import { Plus } from 'lucide-react'
import { ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'

const SelectCard: React.FC<{
  selectedCards: CardInfo[]
  setSelectedCards: (cards: CardInfo[]) => void
}> = ({
  selectedCards,
  setSelectedCards
}) => {
  const cardAlreadySelected = (card: CardInfo) => {
    return selectedCards.map(({title}) => title).includes(card?.title)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex flex-col lg:col-span-3 gap-5 text-center h-fit'>
          <Button
            variant='ghost'
            className='flex rounded-xl border border-foreground items-center justify-center aspect-[1.6/1] w-pr-80 mx-auto h-auto'
          >
            <div className='h-pr-40 aspect-square flex items-center justify-center rounded-full border border-foreground'>
              <Plus className='h-pr-40 w-full aspect-square'/>
            </div>
          </Button>
          <h4 className='text-xl cursor-pointer'>Add card</h4>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-full max-w-80'>
        <div className='flex flex-col gap-6'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Lux cards</h4>
            <p className='text-sm text-muted-2'>
              Select a card to compare
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            {cards.filter(c => !cardAlreadySelected(c)).map((cardChoice, i) => (
              <div
                key={i}
                className='flex gap-4 cursor-pointer items-center'
                onClick={() => setSelectedCards([...selectedCards, cardChoice])}
              >
                <ImageBlockComponent
                  block={{blockType: 'image', 
                      src: cardChoice.img, dim: {w: 700, h: 441 },
                      alt: cardChoice.title
                    } as ImageBlock
                  }
                  className='w-12 h-auto m-0'
                />
                <h3 className='hover:opacity-80'>{cardChoice.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default SelectCard