import { Fragment } from 'react'
import { cn } from '@hanzo/ui/util'
import { Main } from '@hanzo/ui/primitives'

import cards from '@/content/cards'
import CardPreview from './desktop-card-preview'

const DesktopAllCards: React.FC<{
  clx: string
}> = ({
  clx,
}) => {
  return (
    <Main className={cn('flex flex-col gap-20', clx)}>
      {cards.map((card, index) => (
        <Fragment  key={index}>
          <CardPreview card={card} />
        </Fragment>
      ))}
    </Main>
  )
}

export {
  DesktopAllCards as default
}