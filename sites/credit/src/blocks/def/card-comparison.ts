import type { CardCategory } from '@/types'
import type { Block } from '@hanzo/ui/blocks'

interface CardComparisonBlock extends Block {
  blockType: 'card-comparison'
  cards: CardCategory[] 
}

export {
  type CardComparisonBlock as default
}
