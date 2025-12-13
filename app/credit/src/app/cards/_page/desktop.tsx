import { cn } from '@hanzo/ui/util'
// Use local Main to avoid Firebase imports from @luxfi/ui
import MainNoAuth from '@/components/main-no-auth'

import cards from '@/content/cards'
import CardPreview from './desktop-card-preview'

const DesktopAllCards: React.FC<{
  clx: string
}> = ({
  clx,
}) => (
  <MainNoAuth className={cn('flex flex-col gap-20', clx)}>
  {cards.map((card, index) => ( <CardPreview key={index} card={card} /> ))}
  </MainNoAuth>
)

export {
  DesktopAllCards as default
}