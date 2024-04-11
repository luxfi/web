import type { Product, Family } from '@hanzo/commerce/types'
import { pass as video } from './videos'

const PS_IMG = '/assets/commerce/ps/product/pass-800x800.png'
const PS_IMG_DEF = {src: PS_IMG, dim: {w: 800, h:800}}

export default {
  id: 'LXM-PS',
  title: 'Lux Pass',
  img: PS_IMG_DEF, 
  products: [
    {
      id: 'LXM-PS-PS',
      sku: 'LXM-PS-PS',
      fullTitle: 'Lux Pass',
      familyTitle: 'Lux Pass',
      optionLabel: 'Lux Pass',
      familyId: 'LXM-PS',
      price: 100,
      img: PS_IMG_DEF,
      video,
      animation: 'https://prod.spline.design/Itggaf1iI7481mcU/scene.splinecode'
    },
  ] satisfies Product[]
} satisfies Family