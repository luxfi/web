import * as React from 'react'

import type { ButtonVariants } from '@/primitives/button'

interface DialogProps {
  open: boolean
  onOpenChange: (b: boolean) => void
  trigger: React.ReactNode
  title: string
  byline?: string
  //onSubmit: (data: any) => void
}

interface LinkItemDef {
  title?: string
  href?: string
  target?: '_blank' | '_self'
  disabled?: boolean
  external?: boolean
  variant?: ButtonVariants

    // If Modal is not also supplied, this component is rendered. Otherwise...
  component?: React.ReactNode // ForwardRefButton | ForwardRefLink | React.ReactNode
    // ... if Modal is supplied, the component is rendered as the trigger for the Modal.
    // Must supply component if Modal is supplied.
  Modal?: React.ComponentType<DialogProps>
  modalProps?: any
  modalTitle?: string
  modalByline?: string
  //modalSubmit?: (data: any) => void
}

export {
  type LinkItemDef as default,
  type DialogProps,
}