import type { PropsWithChildren } from 'react'

import { TooltipProvider } from '@hanzo/ui/primitives-common'


const Contexts: React.FC<{
} & PropsWithChildren> = ({ 
  children,
}) => {

  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}

export default Contexts
