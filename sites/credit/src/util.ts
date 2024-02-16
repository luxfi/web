import type { Product } from '@/types'

export const getProductHeading = (product: Product): string => (
  `lux ${product} card`.toUpperCase()
)

