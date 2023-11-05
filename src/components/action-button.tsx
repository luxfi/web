import React from 'react'
import dynamic from 'next/dynamic'

import type { ButtonDef, ButtonModalDef } from '@/types'

  // The DVC must be rendered client-side since it accesses the DOM directly, etc.
  // Note that there is no need for a loading UI since the dialog only opens
  // once it's been rendered and the user is already waiting.
const DynamicDVC = dynamic(() => (import('../primitives/dialog-video-controller')))

const ActionButton: React.FC<{
  def: ButtonDef
  className?: string
}> = ({
  def,
  className=''
}) => {
  if (def.action.type === 'modal') {
    const m = def.action.def as ButtonModalDef
    const Modal = m.Comp
    return (
      <DynamicDVC>
        <Modal 
          title={m.title}
          byline={m.byline}
          buttonText={def.text}
          buttonProps={{...def.props, className: def.props?.className + className}}
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
