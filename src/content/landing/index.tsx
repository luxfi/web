import React from 'react'
import { AssetBannerBlock, ElementBlock } from '../types'
import Button from '@/primitives/button'

import BottomMDX from './landing-bottom.mdx'

import silverMedia from '@/content/products/silver/video'
import goldMedia from '@/content/products/gold/video'
import coinMedia from '@/content/products/coin/video'
import creditMedia from '@/content/products/credit/video'
import validatorMedia from '@/content/products/validator/video'
import passMedia from '@/content/products/pass/video'

import coinWaitlistModal from '@/content/products/coin/waitlist-modal'
import creditWaitlistModal from '@/content/products/credit/waitlist-modal'
import passWaitlistModal from '@/content/products/pass/waitlist-modal'
import validatorWaitlistModal from '@/content/products/validator/waitlist-modal'


export default {
  assets: [
    {
      blockType: 'asset-banner',
      title: 'LUX SILVER',
      byline: 'The Silver Rush is Here.',
      media: silverMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/silver",
            variant: 'outline'
          },
          {
            title: "Buy Now",
            href: "/",
            variant: 'primary'
          },
        ]
      } 
    },
    {
      blockType: 'asset-banner',
      title: 'LUX GOLD',
      byline: 'Responsibly manufactured, ethically sourced.',
      media: goldMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/gold",
            variant: 'outline'
          },
          {
            title: "Buy Now",
            href: "/",
            variant: 'primary'
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX COIN',
      byline: 'Genesis Collection now available on Open Sea.',
      media: coinMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/coin",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: coinWaitlistModal
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX VALIDATOR',
      byline: 'Run the chain.',
      media: validatorMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/validator",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: validatorWaitlistModal
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX CREDIT',
      byline: 'Never sell your crypto again.',
      media: creditMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/credit",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: creditWaitlistModal
          },
        ]
      }
    },
    {
      blockType: 'asset-banner',
      title: 'LUX PASS',
      contentBefore: (<>
        <h6>FREE priority access to LUX events and NFT drops.</h6>
        <p>Get priority access to the launch.</p>
      </>),
      media: passMedia,
      ctas: {
        blockType: 'cta',
        items: [
          {
            title: "Learn More",
            href: "/validator",
            variant: 'outline'
          },
          {
            component: <Button variant='primary' size='lg'>Waitlist</Button>,
            modal: passWaitlistModal
          },
        ]
      }
    },
  ] as AssetBannerBlock[],
  bottom: {
    blockType: 'element',
    element: <BottomMDX /> 
  } as ElementBlock
}