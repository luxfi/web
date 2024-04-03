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
  travelBenefits: React.ReactNode,
  lifestyleBenefits: React.ReactNode,
  rewards: React.ReactNode,
  karmaRewards: React.ReactNode,
  preview: React.ReactNode,
  quickview: {
    row1: React.ReactNode[],
    row2: React.ReactNode[]
  }
}

export {
  type Card,
  type CardCategory,
  type CardMaterial,
  type CardType
}

