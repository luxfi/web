import React from 'react'

import type { ElementBlock, Block } from '@hanzo/ui/blocks'

import { BuyButton } from '@luxfi/core'

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

/*
  bottom: [
    {blockType: 'element',
     element: <BottomMDX />
    } satisfies ElementBlock as Block,
    {blockType: 'element',
     element: (
      <div className='w-full flex flex-col justify-center items-center'>
        <BuyButton skuPath='LXM-AG' className='lg:min-w-[220px] min-w-[220px]'>Buy</BuyButton>
      </div>
     )
    } satisfies ElementBlock as Block,
  ] satisfies Block[]
*/
}
