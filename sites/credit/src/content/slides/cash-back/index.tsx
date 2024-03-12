import type { 
  Block,
  CTABlock, 
  HeadingBlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import CashBackGraphic from './cash-back-graphic'
import MDX_right from './right.mdx'

const AR = 0.94

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center', 'vert-center'],
  contentColumns: [[
    {blockType: 'element',
      element: (<div className={'self-center xs:w-full sm:w-[420px] aspect-square md:aspect-auto overflow-hidden'}>
        <CashBackGraphic dim={{w: AR * 600, h: 600}} className={
          'relative block xs:-top-32 xs:w-pr-90 xs:mx-auto ' +
          'sm:-top-24 sm:max-w-full md:max-h-full md:w-full ' + 
          'md:-top-15 '
        }/>
      </div>)
    } satisfies ElementBlock as Block
  ] , [
    {blockType: 'element',
      element: (
        <ApplyTypography className={
          'self-center w-full xs:max-w-pr-80 sm:max-w-[24rem] ' + 
          'xs:typography-hr:hidden xs:typography-h5:text-base md:typography-h5:text-xl xs:typography-h5:font-semibold ' +
          'sm:typography-h5:text-center md:typography-h5:text-left ' +  
          'md:typography-h5:pt-3 md:typography-hr:block md:typography-h5:py-6 md:pl-4 ' 
          //'lg:pl-4'
        }>
          <MDX_right />
        </ApplyTypography>
      )
    } satisfies ElementBlock as Block
  ]] as Block[][], 
} satisfies ScreenfulBlock as ScreenfulBlock