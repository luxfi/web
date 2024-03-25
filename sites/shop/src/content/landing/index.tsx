import React from 'react'

import type { ElementBlock, Block } from '@hanzo/ui/blocks'
import { BuyItemButton } from '@hanzo/commerce'

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
    pass,
  ] satisfies BannerBlock[],

  bottom: [
    {blockType: 'element',
     element: <BottomMDX />
    } satisfies ElementBlock as Block,
    {blockType: 'element',
     element: (
      <div className='w-full flex flex-col justify-center items-center'>
        <BuyItemButton skuPath='LXM-AG' popupClx='w-[340px]' className='lg:min-w-[220px] min-w-[220px]'>Buy</BuyItemButton>
      </div>
     )
    } satisfies ElementBlock as Block,
  ] satisfies Block[]
}
