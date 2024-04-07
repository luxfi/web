import type { Product, Family } from '@hanzo/commerce/types'
import { validatorVideo } from '../videos'

const VL_IMG = '/assets/img/products/validator/validator-800x800.png'

export default {
  id: 'LXM-VL',
  title: 'Lux Validator',
  img: VL_IMG, 
  products: [
    {
      id: 'LXM-VL-GN',
      sku: 'LXM-VL-GN',
      title: 'Genesis Validator',
      optionLabel: 'Genesis Validator',
      familyId: 'LXM-VL',
      price: 1000000, // 1M
      img: VL_IMG,
      video: validatorVideo
    },
    {
      id: 'LXM-VL-VL',
      sku: 'LXM-VL-VL',
      title: 'Validator',
      optionLabel: 'Validator',
      familyId: 'LXM-VL',
      price: 100000, // 100K
      img: VL_IMG,
      video: validatorVideo
    },
    {
      id: 'LXM-VL-MI',
      sku: 'LXM-VL-MI',
      title: 'Mini Validator',
      optionLabel: 'Mini Validator',
      familyId: 'LXM-VL',
      price: 10000, // 10K
      img: VL_IMG,
      video: validatorVideo
    },
    {
      id: 'LXM-VL-NA',
      sku: 'LXM-VL-NA',
      title: 'Nano Validator',
      optionLabel: 'Nano Validator',
      familyId: 'LXM-VL',
      price: 1000, // 1K
      img: VL_IMG,
      video: validatorVideo
    },
  ] satisfies Product[]
} satisfies Family
