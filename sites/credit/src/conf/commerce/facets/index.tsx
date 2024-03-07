import type { FacetsDesc, FacetValueDesc } from '@hanzo/commerce/types'

import SVG_Bar from './img/bar.svg'
import SVG_Coin from './img/coin.svg'
//import SVG_Multibar from './img/multibar.svg'
import SVG_GD from './img/good-delivery.svg'

const BLACK_IMAGE = '/assets/img/cards-flat/black-f-700x441.png'
const ELITE_IMAGE = '/assets/img/cards-flat/gold-f-700x442.png'
const FOUNDER_IMAGE = '/assets/img/cards-flat/chrome-cool-f-700x441.png'
const SOVEREIGN_IMAGE = '/assets/img/cards-flat/titanium-f-700x441.png'

const CC_AR = 1.58577251 // international spec for CC's and our images

const TYPE = [
  {
    value: 'B',
    label: 'Black',
    img: BLACK_IMAGE,
    imgAR: CC_AR
  },
  {
    value: 'E',
    label: 'Elite',
    img: ELITE_IMAGE,
    imgAR: CC_AR,
  },
  {
    value: 'F',
    label: 'Founder',
    img: FOUNDER_IMAGE,
    imgAR: CC_AR,
  },
  {
    value: 'S',
    label: 'Sovereign',
    img: SOVEREIGN_IMAGE,
    imgAR: CC_AR,
  },
] satisfies FacetValueDesc[]

export default {
  1: TYPE,
} satisfies FacetsDesc as FacetsDesc




