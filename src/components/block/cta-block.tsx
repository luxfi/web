import React from 'react'

import type { LinkDef, ButtonDef } from '@/types'
import type { CTABlock } from '@/types/blocks'

import LinkElement from '@/components/link-element'
import ActionButton from '@/components/action-button'
import type { ButtonSizes } from '@/primitives/button'

const CtaBlockComponent: React.FC<{
  cta: CTABlock,
  itemClassName?: string,
  itemSize?: ButtonSizes
}> = ({
  cta : { elements },
  itemClassName='',
  itemSize='default' 
}) => (
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
          className={itemClassName}
        />
      ) 
    }
  })}
  </>
)

export default CtaBlockComponent
