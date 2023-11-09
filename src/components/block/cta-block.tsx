import React from 'react'

import type { LinkDef, ButtonDef } from '@/types'
import type { Block, CTABlock } from '@/types/block'

import LinkElement from '@/components/link-element'
import ActionButton from '@/components/action-button'
import type { ButtonSizes } from '@/primitives/button'

const CtaBlockComponent: React.FC<{
  block: Block,
  itemClassName?: string,
  itemSize?: ButtonSizes
}> = ({
  block,
  itemClassName='',
  itemSize // do not provide default.  this is an override to the def
}) => {
  
  if (block.blockType !== 'cta') {
    return <>cta block required</>
  }

  const { elements } = block as CTABlock

  return (
    <>
    {elements.map((element, index) => {
      if ((element as any).title) {
        const def = element as LinkDef
        return (
          <LinkElement 
            def={def}
            key={index}
            size={itemSize}
            className={itemClassName}
          />
        )
      } 
      else {
        const def = element as ButtonDef
        return (
          <ActionButton 
            def={def}
            key={index}
            size={itemSize}
            className={itemClassName}
          />
        ) 
      }
    })}
    </>
  )
}

export default CtaBlockComponent
