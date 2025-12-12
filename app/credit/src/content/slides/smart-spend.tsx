import type {
    Block,
    EnhHeadingBlock,
    ElementBlock,
    VideoBlock,
    ScreenfulBlock,
    SpaceBlock,
    ImageBlock,
} from '@hanzo/ui/blocks'
import type ItemCTASBlock from '@/blocks/def/item-ctas'
import { DEF_VIDEO_PROPS } from '@luxfi/data'
import { LinkElement } from '@hanzo/ui/primitives'
import { Check } from 'lucide-react'

const checkedText = [
    "No credit effect or credit score needed",
    "Spend up to 50% of your collateral",
    "Premium rewards, w/ compounding yield",
    "Zero-interest, zero liquidation, zero fees",
    "Collateralized loans that are self repaying ",
    "Get a luxurious physical card"
]

export default {
    blockType: 'screenful',
    specifiers: 'vert-center',
    columnSpecifiers: ['vert-center ', 'vert-center'],
    mobileOrder: [1, 0],
    contentColumns: [[
        {
            blockType: 'element',
            element:
                <>
                    <h1 className='font-heading self-start text-4xl sm:text-5xl mb-2 text-left'>LUX<br />CREDIT</h1>
                </>
        } as ElementBlock,
        {
            blockType: 'element',
            element: <span className='self-start text-base sm:text-xl mb-4 md:mb-16 text-muted-2'>A World Beyond Banking: <b>Trustless Defi</b></span>,
        } as ElementBlock,
        {
            blockType: 'element',
            specifiers: 'mobile-center-headings',
            element: <ul className='ml-0 md:ml-4'>{checkedText.map((feature) => (
                <li key={feature} className="flex items-start text-xs md:text-xl">
                    <Check className=" text-base md:text-xl lg:text-2xl h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    <span>{feature}</span>
                </li>
            ))}</ul>
        } as ElementBlock,
       
    ],
    [
        {
            blockType: 'element',
            element:
                <div className='flex flex-col h-full items-start justify-center text-left'>
                    <h1 className='font-heading self-start text-4xl sm:text-5xl mb-2 z-2 text-left'>THE SMART<br />WAY TO SPEND</h1>
                    <img src="/assets/content/smart-spend.png" alt="Smart Spend" className='align-right mt-[-80px] mr-[-80px] md:mt-[-50px] md:mr-0 z-1' />
                </div>
        } as ElementBlock,
    ]
    ]
} as ScreenfulBlock
