import type { CategoryNode } from '@hanzo/commerce/types'
import * as Icons from 'lucide-react'

import SVG_CastBar from './img/bar.svg'
import SVG_Coin from './img/coin2.svg'
import SVG_MintedBar from './img/minted-bar.svg'

import credit from './credit'

const BULLION_FORM = [
  {
    skuToken: 'B',
    label: 'Minted Bars',
    img: <SVG_MintedBar height={18} />,
  },
  {
    skuToken: 'C',
    label: 'Minted Coins',
    img: <SVG_Coin width={18} />,
  },
  {
    skuToken: 'CB',
    label: 'Cast Bars',
    img: <SVG_CastBar width={22} />,
  },
] satisfies CategoryNode[]


const level1 = [
  {
    skuToken: 'AG',
    label: 'Lux Silver',
    terminal: true,
    img: '/assets/img/products/silver/silver-bar-pt-100x125.png',
    imgAR: 1/1.25,
    subNodes: [
      //...BULLION_FORM
      {
        skuToken: 'B',
        label: 'Minted Bars',
        img: <SVG_MintedBar height={18} />,
      }
    ]
  },
  /*
  {
    skuToken: 'AU',
    label: 'Lux Gold',
    terminal: true,
    img: '/assets/img/products/gold/gold-bar-pt-100x125.png',
    imgAR: 1/1.25,
    subNodes: [...BULLION_FORM]
  },
  */
  {
    skuToken: 'VL',
    label: 'Validator',
    img: <Icons.Gem className='text-foreground h-4 w-4'/> //'/assets/img/products/validator/validator-100x100.png',
  },
  {
    skuToken: 'CN',
    label: 'Coin',
    img: '/assets/img/products/coin/lux-coin-446x446.png',
  },
  {
    skuToken: 'PS',
    label: 'Pass',
    img: '/assets/img/products/pass/pass-icon-539x686.png',
    imgAR: 539 / 686
  },

/////
  {
    skuToken: 'FC',
    label: 'Foin',
    img: '/assets/img/products/coin/lux-coin-446x446.png',
  },
/////


  credit
] satisfies CategoryNode[]

export default {
  skuToken: 'LXM',
  label: '',
  subNodes: level1
}





