
import type { Block } from '@hanzo/ui/blocks'
import type { CardCategory } from '@/types'

interface CardDetailBlock extends Block, CardCategory {
  blockType: 'card-detail'
}

export {
  type CardDetailBlock as default
}
