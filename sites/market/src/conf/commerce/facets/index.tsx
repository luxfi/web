import type { FacetValueDesc } from '@hanzo/commerce/types'
import * as Icons from 'lucide-react'

import SVG_CastBar from './img/bar.svg'
import SVG_Coin from './img/coin2.svg'
import SVG_MintedBar from './img/minted-bar.svg'

const BULLION_FORM = [
  {
    value: 'B',
    label: 'Minted Bars',
    img: <SVG_MintedBar height={18} />,
  },
  {
    value: 'C',
    label: 'Minted Coins',
    img: <SVG_Coin width={18} />,
  },
  {
    value: 'CB',
    label: 'Cast Bars',
    img: <SVG_CastBar width={22} />,
  },
] satisfies FacetValueDesc[]


const level1 = [
  {
    value: 'AG',
    label: 'Silver',
    img: '/assets/img/cmmc/silver-bar-pt-100x125.png',
    imgAR: 1/1.25,
    sub: [...BULLION_FORM]
  },
  {
    value: 'AU',
    label: 'Gold',
    img: '/assets/img/cmmc/gold-bar-pt-100x125.png',
    imgAR: 1/1.25,
    sub: [...BULLION_FORM]
  },
  {
    value: 'VL',
    label: 'Validator',
    img: <Icons.Gem className='text-foreground h-4 w-4'/> //'/assets/img/cmmc/validator-100x100.png',
  },
  {
    value: 'CN',
    label: 'Coin',
    img: '/assets/img/cmmc/lux-coin-446x446.png',
  },
  {
    value: 'PS',
    label: 'Pass',
    img: '/assets/img/cmmc/pass-icon-539x686.png',
    imgAR: 539 / 686
  }
] satisfies FacetValueDesc[]

export default {
  value: 'LXM',
  label: '',
  sub: level1
}





