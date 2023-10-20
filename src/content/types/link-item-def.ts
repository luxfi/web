import type { ComponentType } from 'react'

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
  Modal?: ComponentType<DialogProps>
  trigger?: React.ForwardedRef<HTMLButtonElement> | React.ForwardedRef<HTMLAnchorElement>
  modalProps?: any
  modalTitle?: string
  modalByline?: string
  //modalSubmit?: (data: any) => void
}

export {
  type LinkItemDef as default,
  type DialogProps
}
