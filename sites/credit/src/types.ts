import { type ReactNode } from 'react'
import type { ImageDef } from '@hanzo/ui/types'

type Product = 'black' | 'elite' | 'founder' | 'sovereign'

interface CardDetail {
  level: Product
  material: {
    short: string
    variants: string[]
  }
  run: number
  fees: {
    initial: number
    annual: number
  }
  image: ImageDef
  detail: ReactNode
}


export {
  type Product,
  type CardDetail

}


