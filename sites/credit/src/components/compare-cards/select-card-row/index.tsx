import { Main } from '@hanzo/ui/primitives'

import SelectCard from './select-card'
import { numCardsDesktop, numCardsMobile, type CardWithSelectedMaterial } from '../index'
import CardHero from './card-hero'
import RowHeading from '../row-heading'

const SelectCardRow: React.FC<{
  selectedCards: CardWithSelectedMaterial[]
  setSelectedCards: (cards: CardWithSelectedMaterial[]) => void
  condensed?: boolean
}> = ({
  selectedCards,
  setSelectedCards,
  condensed
}) => {
  return (
    <Main className='grid grid-cols-2 lg:grid-cols-11 gap-4 sm:gap-8 lg:gap-16 items-start'>
      {condensed ? (
        <div className='hidden lg:block lg:col-span-2'></div>
      ) : (
        <RowHeading
          title='Compare'
          description='These offers may not be available if you leave this web page and return later.'
          className='text-center lg:text-left typography-h4:!text-3xl'
        />
      )}
      {[...Array(numCardsDesktop)].map((_, i) => {
        if (selectedCards[i]) {
          return (
            <CardHero
              key={i}
              card={selectedCards[i]}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              hiddenOnMobile={i > numCardsMobile - 1}
              condensed={condensed}
            />
          )
        }
        return (
          <SelectCard
            key={i}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            hiddenOnMobile={i > numCardsMobile - 1}
            condensed={condensed}
          />
        )
      })}
    </Main>
  )
}

export {
  SelectCardRow as default,
}