'use client'

import { cn } from '@hanzo/ui/util'
import { Main } from '@hanzo/ui/primitives'

import cards from '@/content/compare-cards'
import CardPreview from './desktop-card-preview'

const DesktopAllCards: React.FC<{
  clx: string
}> = ({
  clx,
}) => {
  return (
    <Main className={cn('flex flex-col gap-20', clx)}>
      {cards.map((card, index) => (
        <CardPreview key={index} card={card} />
      ))}
    </Main>
  )
}

export {
  DesktopAllCards as default
}