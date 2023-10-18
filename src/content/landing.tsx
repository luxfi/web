import React from 'react'
import { SimpleAsset, NavItem } from '@/types'

export default {
  assets: [
    {
      title: 'LUX SILVER',
      byline: 'The Silver Rush is Here.'


    }
  ] as SimpleAsset[],

  bottomText: (
    <><p>Foo</p></>
  ) as React.ReactNode,
  
  cta: {
    title: 'Enter App',
    href: '/'
  } as NavItem
}