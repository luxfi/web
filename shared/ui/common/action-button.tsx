import React from 'react'
import dynamic from 'next/dynamic'

import { cn } from '../util'

import type { ButtonDef, ButtonModalDef } from '../types'
import { ButtonSizes } from '../primitives/button'

  // The DVC must be rendered client-side since it accesses the DOM directly.
  // There is no need for a loading UI since the dialog only opens
  // once it's been rendered and the user is already waiting.
  // https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
const DynamicDVC = dynamic(() => (import('../primitives/dialog-video-controller')), {ssr: false})

const ActionButton: React.FC<{
  def: ButtonDef
  size?: ButtonSizes
  className?: string
}> = ({
  def,
  size, // no default.  overrides!
  className=''
}) => {
  if (def.action.type === 'modal') {
    const m = def.action.def as ButtonModalDef
    const Modal = m.Comp
    const sizeToSpread = size ? {size} : {}
    return (
      <DynamicDVC>
        <Modal 
          title={m.title}
          byline={m.byline}
          buttonText={def.text}
          buttonProps={{...def.props, ...sizeToSpread, className: cn((def.props?.className ?? ''), className)}}
          action={m.action}
          actionEnclosure={m.actionEnclosure}
          {...m.props}
        />
      </DynamicDVC>
    )
  }
    // no other types supported yet
  return <></>
}

export default ActionButton
