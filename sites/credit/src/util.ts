import type { CardType } from '@/types'

export const getProductHeading = (product: CardType): string => (
  `lux ${product} card`.toUpperCase()
)

