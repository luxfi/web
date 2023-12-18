import React from 'react'

import type { LinkDef, ButtonDef} from '../../types'
import type { ButtonSizes } from '../../primitives'
import { ActionButton, LinkElement } from '../../common'
import type { Block, CTABlock } from '../def'

const CtaBlockComponent: React.FC<{
  block: Block,
  itemClassName?: string,
  itemSize?: ButtonSizes
  renderLink?: (def: LinkDef, key: any) => JSX.Element
  renderButton?: (def: ButtonDef, key: any) => JSX.Element
}> = ({
  block,
  itemClassName='',
  itemSize, // do not provide default.  this is an override to the def
  renderLink,
  renderButton
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
        return renderLink ? renderLink(def, index) : (
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
        return renderButton ? renderButton(def, index) : (
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
