import React from 'react'

import type { ElementBlock, Block } from '@hanzo/ui/blocks'

import { BuyButton } from '@luxfi/ui'

import type BannerBlock from '@/blocks/def/banner-block'

import silver from '../products/silver/banner'
import gold from '../products/gold/banner'
import coin from '../products/coin/banner'
import validator from '../products/validator/banner'
import credit from '../products/credit/banner'
import key from '../products/key/banner'
// import uranium from '../products/uranium/banner'

import last from './last'

//import BottomMDX from './landing-bottom.mdx'


export default {

  banners: [
    silver,
    //gold,
    credit,
    validator,
    coin,
    // uranium,
    key,
    last
  ] satisfies BannerBlock[],

}
