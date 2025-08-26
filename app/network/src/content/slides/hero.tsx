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
  columnSpecifiers: ['left vert-center text-align-left', 'right vert-center'],
  specifiers: "vert-center",
  mobileOrder: [1, 0],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: <p className='self-start text-base sm:text-xs mb-2 px-4 md:px-0'>Access to over $3.1 trillion hyper liquid assets and growing</p>,
      } as ElementBlock,
      {
        blockType: 'element',
        element: <span className='self-start text-2xl sm:text-lg mb-4 px-4 md:px-0'>Private, Post-Quantum, <b>Sovereign DeFi</b></span>,
      } as ElementBlock,
      {
        blockType: 'element',
        element: <h1 className='font-heading not-typography self-start text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-12 px-4 md:px-0'>LUX NETWORK</h1>,
      } as ElementBlock,
      {
        blockType: 'element',
        specifiers: 'mobile-center-headings',
        element: <ul className='flex flex-col gap-2 px-4 md:px-0 text-sm sm:text-base'>{checkedText.map((feature) => (
          <li key={feature} className="flex items-center space-x-3">
            <Check className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}</ul>
      } as ElementBlock,
      { blockType: 'space', level: 0 } as SpaceBlock,
      {
        blockType: 'element',
        specifiers: 'mobile-center-headings',
        element: <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 justify-center md:justify-start relative">
          <a href="https://lux.network#run-the-network" className="flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-fg sm:hover:bg-primary-hover font-nav whitespace-nowrap not-typography h-9 py-2 px-4 text-sm md:text-base font-semibold min-w-0 rounded-md">
            <div>Run Chain</div>
          </a>
          <a href="https://bridge.lux.network" className="flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-fg sm:hover:bg-secondary-hover font-nav whitespace-nowrap not-typography h-9 py-2 px-4 text-sm md:text-base font-semibold min-w-0 rounded-md">
            <div>Bridge Assets</div>
          </a>
          <a href="https://explore.lux.network/" className="flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-foreground bg-background border border-muted-4 sm:hover:bg-level-1 sm:hover:text-accent sm:hover:border-accent font-nav whitespace-nowrap not-typography h-9 py-2 px-4 text-sm md:text-base font-semibold min-w-0 rounded-md">
            <div>Explore Network</div>
          </a>
        </div>
      } as ElementBlock,
      { blockType: 'space', level: 0 } as SpaceBlock,
    ],
    [video]
  ],
})

export default createScreenful({})
