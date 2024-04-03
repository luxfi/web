import { type ReactNode } from 'react'
import type { Category } from '@hanzo/commerce/types'
import type { ImageDef } from '@hanzo/ui/types'

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

type CardMaterial = {
  title: string
  sku: string
  materialImg: ImageDef
  cardImg: ImageDef
  animation: string
}

type Card = {
  category: string,
  title: string,
  materials: CardMaterial[],
  annualFee: number,
  initiationFee: number,
  replacementFee: number,
  rewardPct: number,
  fxRatePct: number,
  maxAccountHolders: number,
  travelBenefits: ReactNode,
  lifestyleBenefits: ReactNode,
  rewards: ReactNode,
  karmaRewards: ReactNode,
  preview: ReactNode,
  quickview: {
    row1: ReactNode[],
    row2: ReactNode[]
  },
  cardDetails: {
    description: ReactNode,
    karma: {
      multiplier: number,
      title: string,
      description: string
    }[]
  }
}

export {
  type Card,
  type CardCategory,
  type CardMaterial,
  type CardType
}

