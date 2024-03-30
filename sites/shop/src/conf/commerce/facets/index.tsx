import type { ProductTreeNode } from '@hanzo/commerce/types'
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
] satisfies ProductTreeNode[]


const level1 = [
  {
    skuToken: 'AG',
    label: 'Silver',
    img: '/assets/img/cmmc/silver-bar-pt-100x125.png',
    imgAR: 1/1.25,
    subNodes: [...BULLION_FORM]
  },
  {
    skuToken: 'AU',
    label: 'Gold',
    img: '/assets/img/cmmc/gold-bar-pt-100x125.png',
    imgAR: 1/1.25,
    subNodes: [...BULLION_FORM]
  },
  {
    skuToken: 'VL',
    label: 'Validator',
    img: <Icons.Gem className='text-foreground h-4 w-4'/> //'/assets/img/cmmc/validator-100x100.png',
  },
  {
    skuToken: 'CN',
    label: 'Coin',
    img: '/assets/img/cmmc/lux-coin-446x446.png',
  },
  {
    skuToken: 'PS',
    label: 'Pass',
    img: '/assets/img/cmmc/pass-icon-539x686.png',
    imgAR: 539 / 686
  },
  credit
] satisfies ProductTreeNode[]

export default {
  skuToken: 'LXM',
  label: '',
  subNodes: level1
}





