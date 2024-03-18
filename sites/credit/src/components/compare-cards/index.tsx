'use client'

import { ApplyTypography, Button, Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger, Main } from '@hanzo/ui/primitives'
import { useState, type PropsWithChildren, useEffect } from 'react'
import { cards, type Card as CardInfo } from '../../content/compare-cards'
import { Plus, X } from 'lucide-react'
import { ImageBlockComponent, type ImageBlock, CTABlockComponent, type CTABlock } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import Link from 'next/link'

const CardSelect: React.FC<{
  key?: number | string
  card?: CardInfo
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

  const cardAlreadySelected = (card: CardInfo) => {
    return selectedCards.map(({title}) => title).includes(card?.title)
  }

  if (!card) {
    return (
      <Dialog key={key}>
        <DialogTrigger asChild>
          <div className='flex flex-col gap-5 text-center'>
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
        </DialogTrigger>
        <DialogContent className='sm:max-w-[30rem] max-h-screen overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Choose a card</DialogTitle>
          </DialogHeader>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-4'>
            {cards.filter(c => !cardAlreadySelected(c)).map((cardChoice, i) => (
              <div
                key={i}
                className='flex flex-col gap-4 items-center cursor-pointer'
                onClick={() => setSelectedCards([...selectedCards, cardChoice])}
              >
                <ImageBlockComponent
                  block={{blockType: 'image', 
                      src: cardChoice.img, dim: {w: 700, h: 441 },
                      alt: cardChoice.title
                    } as ImageBlock
                  }
                  className='w-full'
                />
                <h3>{cardChoice.title}</h3>
              </div>
           ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <ApplyTypography key={key} className='flex flex-col gap-2 items-center'>
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
        <div><span className='font-bold'>Annual Fee:</span> ${card.annualFee}</div>
        <div><span className='font-bold'>Initiation Fee:</span> ${card.initiationFee}</div>
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

const RowHeading: React.FC<{
  title: string,
  description?: string
}> = ({
  title,
  description
}) => {
  return (
    <ApplyTypography className='flex flex-col gap-7'>
      <h4 className='font-nav'>{title}</h4>
      {description && <p className='italic text-sm mb-2'>{description}</p>}
    </ApplyTypography>
  )
}

const Row: React.FC<{
  key?: number | string,
  title: string,
  description?: string
  isOdd?: boolean
} & PropsWithChildren> = ({
  key,
  title,
  description,
  isOdd,
  children
}) => {
  return (
    <div key={key} className={cn('py-4', isOdd ? 'bg-muted-4' : '')}>
      <Main className='grid grid-cols-4 gap-20'>
        <RowHeading title={title} description={description}/>
        {children}
      </Main>
    </div>
  )
}

const CompareCards: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<CardInfo[]>([])

  const rows = [
    {
      title: 'Travel Benefits',
      description: 'Sustainable, mindful experiences to elevate the body, mind, and soul.',
      content: <>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6'>
            {selectedCards[i] && selectedCards[i].travelBenefits}
          </div>
        ))}
      </>
    },
    {
      title: 'What you earn?',
      content: <>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6'>
            {selectedCards[i] && selectedCards[i].rewards}
          </div>
        ))}
      </>
    },
    {
      title: 'Karma Rewards',
      description: 'Karma Rewards, is our point reward system that can be used to pay for almost anything. You can also leverage it and earn even more by staking the Karma you have accrued in the Lux ecosystem. Plus you can even sell it to pay off your balance. ',
      content: <>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6'>
            {selectedCards[i] && selectedCards[i].karmaRewards}
          </div>
        ))}
      </>
    },
    {
      title: 'Exclusive Lux Benefits',
      content: <>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6'>
            {selectedCards[i] && selectedCards[i].lifestyleBenefits}
          </div>
        ))}
      </>
    },
    {
      title: 'Maximum Account Holders',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(3)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center'>
            {selectedCards[i] && <h4>{selectedCards[i].maxAccountHolders}</h4>}
          </ApplyTypography>
        ))}
      </>
    },
    {
      title: 'Annual Reward',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(3)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center'>
            {selectedCards[i] && <h4>{selectedCards[i].rewardPct}%</h4>}
          </ApplyTypography>
        ))}
      </>
    },
    {
      title: 'Lost Card Fee',
      description: 'If you lose your card we can replace it and get it to you within 3 days, business days with expedited worldwide shipping.',
      content: <>
        {[...Array(3)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center'>
            {selectedCards[i] && <h4>${selectedCards[i].replacementFee}</h4>}
          </ApplyTypography>
        ))}
      </>
    },
    {
      title: 'FX Rate',
      description: 'Rate of exchange when traveling or paying in foreign currency.',
      content: <>
        {[...Array(3)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center'>
            {selectedCards[i] && <h4>{selectedCards[i].fxRatePct}%</h4>}
          </ApplyTypography>
        ))}
      </>
    }
  ]

  return (
    <div className='flex flex-col py-4'>
      <Main className='grid grid-cols-4 gap-16'>
        <RowHeading
          title='Compare'
          description='These offers may not be available if you leave this web page and return later.'
        />
        {[...Array(3)].map((_, i) => (
          <CardSelect
            key={i}
            card={selectedCards[i]}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
          />
        ))}
      </Main>
      {rows.map(({title, description, content}, i) => (
        <Row
          key={i}
          isOdd={i % 2 === 1}
          title={title}
          description={description}
        >
          {content}
        </Row>
      ))}
    </div>
  )
}

export default CompareCards