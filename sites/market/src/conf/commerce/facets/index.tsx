import type { FacetsDesc, FacetValueDesc } from '@hanzo/cart/types'

import SVG_Bar from './img/bar.svg'
import SVG_Coin from './img/coin.svg'
//import SVG_Multibar from './img/multibar.svg'
import SVG_GD from './img/good-delivery.svg'

const TYPE = [
  {
    value: 'AG',
    label: 'Silver',
    img: '/assets/img/cart/ui/facets/silver-swatch-200x200.png'
  },
  {
    value: 'AU',
    label: 'Gold',
    img: '/assets/img/cart/ui/facets/gold-swatch-150x150.png'
  },
] satisfies FacetValueDesc[]

const FORM = [
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

export default {
  1: TYPE,
  2: FORM
} satisfies FacetsDesc as FacetsDesc




