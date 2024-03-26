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
  img: string
  sku: string
}

type Card = {
  img: ImageDef,
  title: string,
  rarity?: string,
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
}

export {
  type Card,
  type CardCategory,
  type CardMaterial,
  type CardType
}

