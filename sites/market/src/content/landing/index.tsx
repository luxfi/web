import React from 'react'

import type { ElementBlock } from '@hanzo/ui/blocks'
import type BannerBlock from '@/blocks/def/banner-block'

import silver from '../products/silver/banner'
import gold from '../products/gold/banner'
import coin from '../products/coin/banner'
import validator from '../products/validator/banner'
import credit from '../products/credit/banner'
import pass from '../products/pass/banner'
import uranium from '../products/uranium/banner'

import BottomMDX from './landing-bottom.mdx'


export default {

  banners: [
    silver,
    gold,
    credit,
    validator,
    coin,
    //uranium,
    //pass,
  ] as BannerBlock[],

  bottom: {
    blockType: 'element',
    element: <BottomMDX />
  } as ElementBlock

}
