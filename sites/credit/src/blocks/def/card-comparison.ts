import type { CardDetail } from '@/types'
import type { Block } from '@hanzo/ui/blocks'

interface CardComparisonBlock extends Block {
  blockType: 'card-comparison'
  cards: CardDetail[] 
}

export {
  type CardComparisonBlock as default
}
