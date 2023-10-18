import React from 'react'
import { AssetBanner, NavItem } from '@/types'

export default {
  assets: [
    {
      title: 'LUX SILVER',
      byline: 'The Silver Rush is Here.',
      media: {
        type: 'video',
        videoProps: {
          autoPlay: true, 
          loop: true, 
          muted: true, 
          playsInline: true
        }, 
        sources: ['/assets/video/luxsilver.mp4'],
          // From manually looking at aspect ratio
          // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
        dim: {
            // .61 aspect
          width: 200,
          height: 327
        }
      },
      ctas: [
        {
          title: "Learn More",
          href: "/",
          variant: 'outline'
        },
        {
          title: "Buy Now",
          href: "/",
          variant: 'default'
        },
      ]
    },
    {
      title: 'LUX GOLD',
      byline: 'Responsibly manufactured, ethically sourced.',
      media: {
        type: 'video',
        videoProps: {
          autoPlay: true, 
          loop: true, 
          muted: true, 
          playsInline: true
        }, 
        sources: ['/assets/video/luxgold.mp4'],
          // From manually looking at aspect ratio
          // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
        dim: {
            // .67 ar
          width: 219,
          height: 327
        }
      },
      ctas: [
        {
          title: "Learn More",
          href: "/",
          variant: 'outline'
        },
        {
          title: "Buy Now",
          href: "/",
          variant: 'default'
        },
      ]
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