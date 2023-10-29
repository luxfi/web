import React from 'react'

import type { AssetBannerBlock, ElementBlock } from '../types'

import silver from '../products/silver/banner'
import gold from '../products/gold/banner'
import coin from '../products/coin/banner'
import validator from '../products/validator/banner'
import credit from '../products/credit/banner'
import pass from '../products/pass/banner'

import BottomMDX from './landing-bottom.mdx'

export default {

  banners: [
    silver,
    gold,
    coin,
    validator,
    credit,
    pass,
  ] as AssetBannerBlock[],

  bottom: {
    blockType: 'element',
    element: <BottomMDX /> 
  } as ElementBlock

}