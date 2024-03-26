'use client'

import { useState } from 'react'

import { ApplyTypography, Main } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import type { Card } from '@/types/card'
import SelectCard from './select-card'
import CardHero from './card-hero'
import RowHeading from './row-heading'
import rowsContent from './rows-content'

const numCardsMobile = 2
const numCardsDesktop = 3

const CompareCards = () => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([])

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
          <Main>
            <ApplyTypography className='flex justify-center w-full col-span-2 lg:col-span-11 mt-12 sm:mb-6 text-center'>
              <h3>Exclusive Lux Card Benefits</h3>
            </ApplyTypography>
          </Main>
          {rowsContent(selectedCards).map(({title, description, content}, i) => (
            <div key={i} className={cn('py-4', i % 2 === 1 ? 'bg-muted-4' : '')}>
              <Main className='grid grid-cols-2 lg:grid-cols-11 gap-8 sm:gap-10 lg:gap-20'>
                <RowHeading title={title} description={description}/>
                {content}
              </Main>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export {
  CompareCards as default,
  numCardsDesktop,
  numCardsMobile
}