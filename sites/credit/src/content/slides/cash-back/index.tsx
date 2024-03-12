import type { 
  Block,
  ElementBlock, 
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import CashBackGraphic from './cash-back-graphic'
import MDX_right from './right.mdx'

const AR = 0.94

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'element',
      element: (<div className={'flex items-center justify-center self-center w-full aspect-square md:aspect-auto overflow-hidden'}>
        <CashBackGraphic className='h-full max-h-[30rem] px-4'/>
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