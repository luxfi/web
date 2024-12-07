import {
  VideoBlockComponent,
  type CTABlock,
  type EnhHeadingBlock,
  type ScreenfulBlock,
  ScreenfulBlockComponent,
} from '@hanzo/ui/blocks'
import type { ElementBlock, VideoBlock, SpaceBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'
import "./animation.css"
import { Check } from "lucide-react"

type HeroProps = {
  txCount?: string
}

const checkedText = [
  "Sovereign and unstoppable",
  "Lightning-fast transactions",
  "Future-proof quantum security",
  "Privacy built for the modern age",
  "Effortless high-yield staking",
]

const video = {
  blockType: 'video',
  videoProps: { ...DEF_VIDEO_PROPS, preload: 'auto' },
  poster: 'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.mp4',
    'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.webm'
  ],
  dim: {
    md: {
      w: 600,
      h: 350
    },
    lg: {
      w: 800,
      h: 450
    },
  },
} as VideoBlock

const createScreenful = (props: HeroProps): ScreenfulBlock => ({
  blockType: 'screenful',
  columnSpecifiers: ['left vert-center text-align-left ', 'bottom vert-center'],
  mobileOrder: [1, 0],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: <p className='self-start text-[16px] sm:text-[12px] mb-2'>Access to over $3.1 trillion hyper liquid assets and growing</p>,
      } as ElementBlock,
      {
        blockType: 'element',
        element: <span className='self-start text-[24px] sm:text-[18px] mb-4'>Private, Post Quantum, Sovereign DeFi</span>,
      } as ElementBlock,
      {
        blockType: 'element',
        element: <h1 className='font-heading self-start text-6xl sm:text-5xl mb-12'>LUX NETWORK</h1>,
      } as ElementBlock,
      {
        blockType: 'element',
        specifiers: 'mobile-center-headings',
        element: <ul>{checkedText.map((feature) => (
          <li key={feature} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}</ul>
      } as ElementBlock,
      { blockType: 'space', level: 0 } as SpaceBlock,
      {
        blockType: 'cta',
        specifiers: 'left desktop-dont-fill mobile-center-first-if-odd mobile-odd-full-width mb-12',
        elements: [
          {
            title: "Run Chain",
            href: "https://lux.network#run-the-network",
            variant: 'primary',
          },
          {
            title: "Bridge Assets",
            href: "https://bridge.lux.network",
            variant: 'secondary',
          },
          {
            title: "Explore Network",
            href: "https://explore.lux.network/",
            variant: 'outline',
          },
        ]
      } as CTABlock,
    ],
    [video]
  ],
})

export default {
  blockType: 'screenful',
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='p-3 z-2 flex-col md:flex-row'>
            <ScreenfulBlockComponent block={createScreenful({})} />
          </div>
        )
      } as ElementBlock,
    ]
  ]
} as ScreenfulBlock
