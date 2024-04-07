import type { Product, Family } from '@hanzo/commerce/types'
import { passVideo } from '../videos'

const PS_IMG = '/assets/img/products/pass/pass-800x800.png'

export default {
  id: 'LXM-PS',
  title: 'Lux Pass',
  img: PS_IMG, 
  products: [
    {
      id: 'LXM-PS-PS',
      sku: 'LXM-PS-PS',
      title: 'Lux Pass',
      optionLabel: 'Lux Pass',
      familyId: 'LXM-PS',
      price: 100,
      img: PS_IMG,
      video: passVideo
    },
  ] satisfies Product[]
} satisfies Family