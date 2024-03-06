import type { FacetsDesc, FacetValueDesc } from '@hanzo/commerce/types'

import SVG_Bar from './img/bar.svg'
import SVG_Coin from './img/coin.svg'
//import SVG_Multibar from './img/multibar.svg'
import SVG_GD from './img/good-delivery.svg'

const BLACK_IMAGE = '/assets/img/black-flat-578x373.png'
const ELITE_IMAGE = '/assets/img/cards-dual-gd-sl-1485x1114.png'
const FOUNDER_IMAGE = '/assets/img/cards-dual-chr-psm-1475x1220.png'
const SOVEREIGN_IMAGE = '/assets/img/cards-2-flat-tit-1593x1231.png'

const TYPE = [
  {
    value: 'B',
    label: 'Black',
    //img: BLACK_IMAGE
  },
  {
    value: 'E',
    label: 'Elite',
    //img: ELITE_IMAGE
  },
  {
    value: 'F',
    label: 'Founder',
    //img: FOUNDER_IMAGE
  },
  {
    value: 'S',
    label: 'Sovereign',
    //img: SOVEREIGN_IMAGE
  },
] satisfies FacetValueDesc[]

export default {
  1: TYPE,
} satisfies FacetsDesc as FacetsDesc




