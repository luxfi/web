
import type { Block } from '@hanzo/ui/blocks'
import type { CardDetail } from '@/types'

interface CardDetailBlock extends Block, CardDetail {
  blockType: 'card-detail'
}

export {
  type CardDetailBlock as default
}
