import React from 'react'
import Image from 'next/image'
import type { 
  ElementBlock, 
  ScreenfulBlock, 
  SpaceBlock,
  Block,
  EnhHeadingBlock
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import type ElementTableBlock from '@/blocks/def/element-table'


const CARDS = {
  black : <Image src='/assets/img/cards-dual-black-1483x1361.png' alt='cards' width={150} height={137.5} loading='lazy' />,
  elite : <Image src='/assets/img/cards-dual-black-1483x1361.png' alt='cards' width={150} height={137.5} loading='lazy' />,
  founder : <Image src='/assets/img/dual-elite-cards-1475x1220.png' alt='cards' width={150} height={124} loading='lazy' />,
  sovereign : <Image src='/assets/img/cards-dual-black-1483x1361.png' alt='cards' width={150} height={137.5} loading='lazy' />,
}

export default   {
  blockType: 'screenful',
  specifiers: 'narrow-gutters constrain-to-lg',
  columnSpecifiers: ['center top'],
  contentColumns: [[
    {blockType: 'enh-heading', heading: {text: 'COMPARE CARDS', level: 3}, specifiers: 'center'} satisfies EnhHeadingBlock as Block,
    {
      blockType: 'element-table',
      elements: [
        [
          {blockType: 'element', element: 'Cards'},
          {blockType: 'element', element: CARDS.black},
          {blockType: 'element', element: CARDS.elite},
          {blockType: 'element', element: CARDS.founder},
          {blockType: 'element', element: CARDS.sovereign},
        ],
        [
          {blockType: 'element', element: 'Level'},
          {blockType: 'element', element: 'Black'},
          {blockType: 'element', element: 'Elite'},
          {blockType: 'element', element: 'Founder'},
          {blockType: 'element', element: 'Sovereign'},
        ],
        [
          {blockType: 'element', element: 'Material'},
          {blockType: 'element', element: <p>Matte Carbon<br/><span className='font-normal'>or<br/></span>Stainless Steel</p>},
          {blockType: 'element', element: <p>24k Gold<br/><span className='font-normal'>or<br/></span>Sterling Silver</p>},
          {blockType: 'element', element: <p>Hologram<br/><span className='font-normal'>or<br/></span>Translucent</p>},
          {blockType: 'element', element: <p>100% Reflective<br/>Titanium</p>},
        ],
        [
          {blockType: 'element', element: <p>Initiation<br/>Fee</p>},
          {blockType: 'element', element: <p>$500<br/><span className='font-normal'>One-time</span></p>},
          {blockType: 'element', element: <p>$1,000<br/><span className='font-normal'>One-time</span></p>},
          {blockType: 'element', element: <p>$5,000<br/><span className='font-normal'>One-time</span></p>},
          {blockType: 'element', element: <p>$50,000<br/><span className='font-normal'>One-time</span></p>},
        ],
        [
          {blockType: 'element', element: <p>Annual<br/>Price</p>},
          {blockType: 'element', element: <p>$500<br/><span className='font-normal'>Per Year</span></p>},
          {blockType: 'element', element: <p>$1,000<br/><span className='font-normal'>Per Year</span></p>},
          {blockType: 'element', element: <p>$200<br/><span className='font-normal'>Per Year</span></p>},
          {blockType: 'element', element: <p>$5,000<br/><span className='font-normal'>Per Year</span></p>},
        ],
        [
          {blockType: 'element', element: <p>Supply</p>},
          {blockType: 'element', element: <p>Unlimited</p>},
          {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/100,000</span></p>},
          {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/10,000</span></p>},
          {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/1,000</span></p>},
        ],
      ]
    } satisfies ElementTableBlock as Block,
    { blockType: 'space' } satisfies SpaceBlock as Block,
    { blockType: 'element',
      element: 
        <ApplyTypography className='md:typography-h5:text-center max-w-screen-lg'>
          <h5>Open the door to a universe of digital assets with the Lux Card, serving as your key to effortless transactions and proficient asset management within the Lux ecosystem.</h5>
        </ApplyTypography>
    } satisfies ElementBlock as Block
  ]],
} satisfies ScreenfulBlock as ScreenfulBlock