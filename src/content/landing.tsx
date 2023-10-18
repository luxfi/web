import React from 'react'
import { AssetBanner, NavItem } from '@/types'

export default {
  assets: [
    {
      title: 'LUX SILVER',
      byline: 'The Silver Rush is Here.'


    }
  ] as AssetBanner[],

  bottomText: (
    <><p>Foo</p></>
  ) as React.ReactNode,
  
  cta: {
    title: 'Enter App',
    href: '/',
    variant: 'default'
  } as NavItem
}