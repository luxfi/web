import type {
    Block,
    EnhHeadingBlock,
    ElementBlock,
    ImageBlock,
    ScreenfulBlock,
    SpaceBlock,
} from '@hanzo/ui/blocks'
import { BlocksComponent } from '@hanzo/ui/blocks'
import { Button } from '@hanzo/ui/primitives'

const byline = 'Every vard lets you earn points that pay off your balance, AND has access to exclusive Lux Card Benefits.'

const viewAllCards = {
    blockType: 'element',
    element: <a className='!w-full max-w-56' href='/cards' style={{textDecoration: 'none'}}><Button variant='outline' className='!w-full max-w-56'>View All Cards</Button></a>
} satisfies ElementBlock as Block

const compare = {
    blockType: 'element',
    element: <a className='!w-full max-w-56' href='/compare' style={{textDecoration: 'none'}}><Button variant='primary' className='!w-full max-w-56'>Compare Cards</Button></a>
} satisfies ElementBlock as Block


export default {
    blockType: 'screenful',
    specifiers: 'vert-center',
    columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
    contentColumns: [[
        {
            blockType: 'image',
            src: '/assets/commerce/cr/family/cards-dual-chr-flat.png',
            alt: 'cards',
            fullWidthOnMobile: true,
            dim: { w: 1475, h: 1220 },
            props: {
                sizes: '900px, 440px',
                style: {
                    width: '70%',
                    height: 'auto'
                }
            }
        } satisfies ImageBlock as Block,
        {
            blockType: 'element',
            element: <a href='/cards/founder?sku=LXM-CR-F-CC' className='text-xxs text-muted-2 relative -top-[2vh] lg:-top-[5vh] lg:left-[4vw] italic' style={{textDecoration : "none"}}>Lux Founder Card</a>
        } satisfies ElementBlock as Block,
    ], [
        {
            blockType: 'enh-heading',
            heading: { text: 'COMPATIBLE WITH YOUR LIFESTYLE', level: 3, mb: 7 },
            byline: { text: byline, level: 6 },
        } satisfies EnhHeadingBlock,
        { blockType: 'space', level: 0 } satisfies SpaceBlock as Block,
        { blockType: 'element', element: <div className='!w-full sm:w-auto grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center sm:gap-4 lg:gap-6 self-center'><BlocksComponent blocks={[viewAllCards, compare]}/></div> } satisfies ElementBlock as Block,
    ]]
} as ScreenfulBlock
