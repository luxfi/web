import type { FacetValueDesc } from '@hanzo/commerce/types'

import SVG_Bar from './img/bar.svg'
import SVG_Coin from './img/coin.svg'
//import SVG_Multibar from './img/multibar.svg'
import SVG_GD from './img/good-delivery.svg'


const BULLION_FORM = [
  {
    value: 'B',
    label: 'Minted Bars',
    img: <SVG_Bar />,
    imgAR: 1
  },
  {
    value: 'C',
    label: 'Minted Coins',
    img: <SVG_Coin />,
    imgAR: 64/80
  },
  /*
  {
    value: 'MB',
    label: 'Multibar',
    img: <SVG_Multibar />,
    imgAR: 128/160
  },
  */
  {
    value: 'CB',
    label: 'Cast Bars',
    img: <SVG_GD />,
    imgAR: 24/30
  },
] satisfies FacetValueDesc[]


export default [
  {
    value: 'AG',
    label: 'Silver',
    img: '/assets/img/cmmc/silver-bar-166x100.png'
    imgAR: 1.66
    sub: [...BULLION_FORM]
  },
  {
    value: 'AU',
    label: 'Gold',
    img: '/assets/img/cmmc/gold-bar-166x100.png'
    imgAR: 1.66
    sub: [...BULLION_FORM]
  },
  {
    value: 'VL',
    label: 'Validator',
    img: '/assets/img/cmmc/validator-100x100.png'
  },
  {
    value: 'CN',
    label: 'Coin',
    img: '/assets/img/cmmc/coin-100x100.png'
  },
  {
    value: 'PS',
    label: 'Pass',
    img: '/assets/img/cmmc/pass-100x100.png'
  }
] satisfies FacetValueDesc[]





