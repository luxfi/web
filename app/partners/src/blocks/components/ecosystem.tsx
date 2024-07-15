import React from 'react'

import { ScreenfulBlockComponent as Screenful, type ScreenfulBlock, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import { ApplyTypography } from '@hanzo/ui/primitives'

import ecosystem from '@/content/ecosystem'
import { CTABlockComponent } from '@hanzo/ui/blocks'

const Ecosystem = () => {
  return (
    <Screenful 
      block={{blockType: 'screenful',
        contentColumns: [[
          {blockType: 'enh-heading',
            specifiers: 'center',
            heading: {
              text: 'The Ecosystem',
              level: 2,
            }
          } as EnhHeadingBlock,
          {blockType: 'element',
            element: (
            <div className='flex flex-col gap-6 mt-6 max-w-[500px] mx-auto'>
              {ecosystem.blocks.map((block, index) => (
                <div key={`ecosystem-${index}`} className='flex flex-col gap-2 text-center'>
                  <CTABlockComponent block={block.title} className='typography-a:no-underline typography-a:font-heading typography-a:text-lg sm:typography-a:text-xl' />
                  {block.description && <p className='sm:text-lg'>{block.description}</p>}
                </div>
              ))}
            </div>
          )}
        ]]
      } as ScreenfulBlock}
    />
  )
}

export default Ecosystem
