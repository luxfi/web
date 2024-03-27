'use client'

import { useState } from 'react'

import { ApplyTypography, Main } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import type { Card, CardMaterial } from '@/types/card'
import RowHeading from './row-heading'
import rowsContent from './rows-content'
import CompareHeader from './compare-header'
import SelectCardRow from './select-card-row'

const numCardsMobile = 2
const numCardsDesktop = 3

type CardWithSelectedMaterial = Card & { selectedMaterial: CardMaterial }

const CompareCards = () => {
  const [selectedCards, setSelectedCards] = useState<CardWithSelectedMaterial[]>([])

  return (
    <>
      <CompareHeader selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
      <div className='flex flex-col mt-4'>
        <SelectCardRow selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
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
    </>
  )
}

export {
  CompareCards as default,
  numCardsDesktop,
  numCardsMobile,
  type CardWithSelectedMaterial
}