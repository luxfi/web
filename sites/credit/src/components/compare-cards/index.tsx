'use client'

import { useState } from 'react'

import { ApplyTypography, Main } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { formatPrice } from '@hanzo/commerce'

import type { Card } from '@/types/card'
import SelectCard from './SelectCard'
import CardHero from './CardHero'
import Row from './Row'
import RowHeading from './RowHeading'

const numCardsMobile = 2
const numCardsDesktop = 3

const MdxRowContent: React.FC<{
  key: number | string
  content?: React.ReactNode
  hiddenOnMobile?: boolean
}> = ({
  key,
  content,
  hiddenOnMobile
}) => {
  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'flex-col gap-2 lg:gap-4 lg:col-span-3 typography-p:text-sm md:typography-p:text-base justify-center'
      )}
    >
      {content}
    </ApplyTypography>
  )
}

const DataRowContent: React.FC<{
  key: number
  content?: React.ReactNode
  hiddenOnMobile?: boolean
}> = ({
  key,
  content,
  hiddenOnMobile
}) => {
  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'items-center justify-center lg:col-span-3'
      )}
    >
      {content && <h4>{content}</h4>}
    </ApplyTypography>
  )
}

const CompareCards = () => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([])

  const rows = [
    {
      title: 'Travel Benefits',
      description: 'Sustainable, mindful experiences to elevate the body, mind, and soul.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent key={i} content={selectedCards[i]?.travelBenefits} hiddenOnMobile={i > numCardsMobile - 1}/>
        ))}
      </>
    },
    {
      title: 'What you earn?',
      description: 'Rewards are based on a percentage of your average available credit.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent key={i} content={selectedCards[i]?.rewards} hiddenOnMobile={i > numCardsMobile - 1}/>
        ))}
      </>
    },
    {
      title: 'Karma Rewards',
      description: 'Karma Rewards, is our point reward system that can be used to pay for almost anything. You can also leverage it and earn even more by staking the Karma you have accrued in the Lux ecosystem. Plus you can even sell it to pay off your balance. ',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent key={i} content={selectedCards[i]?.karmaRewards} hiddenOnMobile={i > numCardsMobile - 1}/>
        ))}
      </>
    },
    {
      title: 'Exclusive Lux Benefits',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent key={i} content={selectedCards[i]?.lifestyleBenefits} hiddenOnMobile={i > numCardsMobile - 1}/>
        ))}
      </>
    },
    {
      title: 'Maximum Account Holders',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent key={i} content={selectedCards[i]?.maxAccountHolders} hiddenOnMobile={i > numCardsMobile - 1}/>
        ))}
      </>
    },
    {
      title: 'Annual Reward',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i] ? `${selectedCards[i].rewardPct}%` : undefined}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'Lost Card Fee',
      description: 'If you lose your card we can replace it and get it to you within 3 days, business days with expedited worldwide shipping.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i] ? formatPrice(selectedCards[i].replacementFee) : undefined}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'FX Rate',
      description: 'Rate of exchange when traveling or paying in foreign currency.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i] ? `${selectedCards[i].fxRatePct}%` : undefined}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    }
  ]

  return (
    <div className='flex flex-col py-4'>
      <Main className='grid grid-cols-2 lg:grid-cols-11 gap-4 sm:gap-8 lg:gap-16'>
        <RowHeading
          title='Compare'
          description='These offers may not be available if you leave this web page and return later.'
          className='text-center lg:text-left typography-h4:!text-3xl'
        />
        {[...Array(numCardsDesktop)].map((_, i) => {
          if (selectedCards[i]) {
            return (
              <CardHero
                key={i}
                card={selectedCards[i]}
                selectedCards={selectedCards}
                setSelectedCards={setSelectedCards}
                hiddenOnMobile={i > numCardsMobile - 1}
              />
            )
          }
          return (
            <SelectCard
              key={i}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              hiddenOnMobile={i > numCardsMobile - 1}
            />
          )
        })}
      </Main>
      {selectedCards.length > 0 && (
        <>
          <Main className='flex lg:hidden'>
            <ApplyTypography className='flex justify-center w-full col-span-2 lg:col-span-11 mt-12 sm:mb-6 text-center'>
              <h3>Exclusive Lux Card Benefits</h3>
            </ApplyTypography>
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
        </>
      )}
    </div>
  )
}

export default CompareCards