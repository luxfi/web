import React from 'react'

import LinkItem from '@/components/link-item'

import type { AssetBannerBlock, ElementBlock } from '@/types/blocks'

import silver from '../products/silver/banner'
import gold from '../products/gold/banner'
import coin from '../products/coin/banner'
import validator from '../products/validator/banner'
import credit from '../products/credit/banner'
import pass from '../products/pass/banner'
import uranium from '../products/uranium/banner'


export default {

  banners: [
    silver,
    gold,
    coin,
    uranium,
    credit,
    validator,
    pass,
  ] as AssetBannerBlock[],

  bottom: {
    blockType: 'element',
    element: <>
      <div>
        <h5 >Join the global rush to own silver</h5>
        <h2>THE SILVER RUSH IS HERE</h2>
      </div>
      <LinkItem 
        item={{
          title: 'Enter App',
          href: 'https://app.lux.market',
          external: true,
          newTab: false,
          variant: 'primary',
        }}
        size='lg'
      />
    </> 
  } as ElementBlock

}

// className='mt-32 lg:mt-4'