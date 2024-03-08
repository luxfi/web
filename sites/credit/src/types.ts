import { type ReactNode } from 'react'
import type { ImageDef } from '@hanzo/ui/types'
import type { Category, Product } from '@hanzo/commerce/types'

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

