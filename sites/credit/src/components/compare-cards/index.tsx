'use client'

import { ApplyTypography, Main } from '@hanzo/ui/primitives'
import { useState } from 'react'
import { type Card as CardInfo } from '../../content/compare-cards'
import SelectCard from './SelectCard'
import CardHero from './CardHero'
import Row from './Row'
import RowHeading from './RowHeading'

const CompareCards: React.FC<{
  agent: string
}> = ({
  agent
}) => {
  const [selectedCards, setSelectedCards] = useState<CardInfo[]>([])

  const numCards = agent === 'desktop' ? 3 : 2

  const rows = [
    {
      title: 'Travel Benefits',
      description: 'Sustainable, mindful experiences to elevate the body, mind, and soul.',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6 lg:col-span-3'>
            {selectedCards[i] && selectedCards[i].travelBenefits}
          </div>
        ))}
      </>
    },
    {
      title: 'What you earn?',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6 lg:col-span-3'>
            {selectedCards[i] && selectedCards[i].rewards}
          </div>
        ))}
      </>
    },
    {
      title: 'Karma Rewards',
      description: 'Karma Rewards, is our point reward system that can be used to pay for almost anything. You can also leverage it and earn even more by staking the Karma you have accrued in the Lux ecosystem. Plus you can even sell it to pay off your balance. ',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6 lg:col-span-3'>
            {selectedCards[i] && selectedCards[i].karmaRewards}
          </div>
        ))}
      </>
    },
    {
      title: 'Exclusive Lux Benefits',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <div key={i} className='flex flex-col gap-6 lg:col-span-3'>
            {selectedCards[i] && selectedCards[i].lifestyleBenefits}
          </div>
        ))}
      </>
    },
    {
      title: 'Maximum Account Holders',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center lg:col-span-3'>
            {selectedCards[i] && <h4>{selectedCards[i].maxAccountHolders}</h4>}
          </ApplyTypography>
        ))}
      </>
    },
    {
      title: 'Annual Reward',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center lg:col-span-3'>
            {selectedCards[i] && <h4>{selectedCards[i].rewardPct}%</h4>}
          </ApplyTypography>
        ))}
      </>
    },
    {
      title: 'Lost Card Fee',
      description: 'If you lose your card we can replace it and get it to you within 3 days, business days with expedited worldwide shipping.',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center lg:col-span-3'>
            {selectedCards[i] && <h4>${selectedCards[i].replacementFee}</h4>}
          </ApplyTypography>
        ))}
      </>
    },
    {
      title: 'FX Rate',
      description: 'Rate of exchange when traveling or paying in foreign currency.',
      content: <>
        {[...Array(numCards)].map((_, i) => (
          <ApplyTypography key={i} className='flex items-center justify-center lg:col-span-3'>
            {selectedCards[i] && <h4>{selectedCards[i].fxRatePct}%</h4>}
          </ApplyTypography>
        ))}
      </>
    }
  ]

  return (
    <div className='flex flex-col py-4'>
      <Main className='grid grid-cols-2 lg:grid-cols-11 gap-16'>
        <RowHeading
          title='Compare'
          description='These offers may not be available if you leave this web page and return later.'
          className='text-center lg:text-left typography-h4:!text-3xl'
        />
        {[...Array(numCards)].map((_, i) => {
          if (selectedCards[i]) {
            return (
              <CardHero
                key={i}
                card={selectedCards[i]}
                selectedCards={selectedCards}
                setSelectedCards={setSelectedCards}
              />
            )
          }
          return (
            <SelectCard
              key={i}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          )
        })}
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