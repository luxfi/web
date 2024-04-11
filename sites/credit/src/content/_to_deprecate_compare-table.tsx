import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { 
  ElementBlock, 
  ScreenfulBlock, 
  SpaceBlock,
  Block,
  EnhHeadingBlock
} from '@hanzo/ui/blocks'

import { BuyTriggerWrapper } from '@hanzo/commerce'

import { cn } from '@hanzo/ui/util'

import type ElementTableBlock from '@/blocks/def/_to_move_element-table'

const textBelow = 'Open the door to a universe of digital assets with the Lux Card.'//, serving as your key to effortless ' + 
//'transactions and proficient asset management within the Lux ecosystem.'


const CARDS = {
  black : <Image src='/assets/commerce/cr/family/cards-dual-black-1483x1074.png' alt='cards' width={150} height={108.5} loading='lazy' />,
  elite : <Image src='/assets/commerce/cr/family/cards-dual-gd-sl-1485x1114.png' alt='cards' width={150} height={112.5} loading='lazy' />,
  founder : <Image src='/assets/commerce/cr/family/cards-dual-chr-psm-1475x1220.png' alt='cards' width={150} height={124} loading='lazy' />,
  sovereign : <Image src='/assets/commerce/cr/family/cards-2-flat-tit-1593x1231.png' alt='cards' width={150} height={116} loading='lazy' />,
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const CardButton : React.FC<{
  product: keyof typeof CARDS
  skuPath: string
  className?: string
}> = ({
  product,
  skuPath,
  className=''
}) => (
  <BuyTriggerWrapper 
    skuPath={skuPath} 
    trigger={(
      <button 
        className={cn('relative w-full opacity-90 group-hover:opacity-100  ' + 
          'rounded-2xl py-4 px-2 ' + 
          'flex flex-col justify-center items-center', 
          '!no-underline',
          className
        )} 
      > 
        {CARDS[product]}
        <div className='font-sans group-hover:text-muted-1 text-center'>
          <span className='text-foreground font-semibold'>{capitalize(product)}</span>
          <br/>
          <span className='hidden sm:inline text-muted-1 text-xxs whitespace-nowrap'>click to buy&nbsp;</span>
        </div>
      </button>
    )} 
  />
    
)

// hidden md:inline

export default {blockType: 'screenful',
  specifiers: 'narrow-gutters constrain-to-lg',
  columnSpecifiers: ['center top'],
  contentColumns: [[
    {blockType: 'enh-heading', 
      heading: {text: 'COMPARE CARDS', level: 3}, 
      byline: {text: textBelow, level: 0}, 
      specifiers: 'center byline-center'
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'space'} satisfies SpaceBlock as Block,
    {blockType: 'element-table',
      elements: [
        [
         // {blockType: 'element', element: ''},
          {blockType: 'element', element: <CardButton product='black' skuPath='LXM-CR-B' />},
          {blockType: 'element', element: <CardButton product='elite' skuPath='LXM-CR-E'/>},
          {blockType: 'element', element: <CardButton product='founder' skuPath='LXM-CR-F'/>},
          {blockType: 'element', element: <CardButton product='sovereign' skuPath='LXM-CR-S'/>},
        ],
        /*
        [
          //{blockType: 'element', element: 'Level'},
          {blockType: 'element', element: 'Black'},
          {blockType: 'element', element: 'Elite'},
          {blockType: 'element', element: 'Founder'},
          {blockType: 'element', element: 'Sovereign'},
        ],
        */
        [
          //{blockType: 'element', element: 'Material'},
          {blockType: 'element', element: <p>Annodized Black<br/>Titanium</p>},
          {blockType: 'element', element: <p>24k Gold<br/><span className='font-normal'>or<br/></span>Sterling Silver</p>},
          {blockType: 'element', element: <p>Cool<br/>Chrome<br/><span className='font-normal'>or</span><br/>Iridescent<br/>Chrome</p>},
          {blockType: 'element', element: <p>Solid Reflective<br/>Titanium</p>},
        ],
        [
          //{blockType: 'element', element: <p>Initiation<br/>Fee</p>},
          {blockType: 'element', element: <p>$500<br/><span className='font-normal'>One-time</span></p>},
          {blockType: 'element', element: <p>$1,000<br/><span className='font-normal'>One-time</span></p>},
          {blockType: 'element', element: <p>$5,000<br/><span className='font-normal'>One-time</span></p>},
          {blockType: 'element', element: <p>$50,000<br/><span className='font-normal'>One-time</span></p>},
        ],
        [
          //{blockType: 'element', element: <p>Annual<br/>Price</p>},
          {blockType: 'element', element: <p>$500<br/><span className='font-normal'>Per Year</span></p>},
          {blockType: 'element', element: <p>$1,000<br/><span className='font-normal'>Per Year</span></p>},
          {blockType: 'element', element: <p>$200<br/><span className='font-normal'>Per Year</span></p>},
          {blockType: 'element', element: <p>$5,000<br/><span className='font-normal'>Per Year</span></p>},
        ],
        [
          //{blockType: 'element', element: <p>Supply</p>},
          {blockType: 'element', element: <p className='whitespace-nowrap'>Not Limited</p>},
          {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/100,000</span></p>},
          {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/10,000</span></p>},
          {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/1,000</span></p>},
        ],
      ]
    } satisfies ElementTableBlock as Block,
    { blockType: 'space', sizes: { lg: 12 }} satisfies SpaceBlock as Block,
  ]],
} satisfies ScreenfulBlock as ScreenfulBlock
