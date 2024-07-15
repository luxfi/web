import { type ReactNode } from 'react'
import type { Family } from '@hanzo/commerce/types'

type CardType = 'black' | 'elite' | 'founder' | 'sovereign'

interface CardFamily extends Family {
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
  type CardFamily
}

