import { type ReactNode } from 'react'
import type { Category } from '@hanzo/commerce/types'

type CardType = 'black' | 'elite' | 'founder' | 'sovereign'

interface CardCategory extends Category {
  type: CardType
  material: string
  run: number
  fees: {
    initial: number
    annual: number
  }
  detail: ReactNode
}


export {
  type CardType,
  type CardCategory
}

