import React, { type PropsWithChildren } from 'react'
import { cn } from '@hanzo/ui/util'

const Main: React.FC<PropsWithChildren & { 
  id?: string
  className?: string 
  headerSpace?: boolean
  standardWidth?: boolean
}> = ({
  children,
  className='',
  headerSpace=true,
  standardWidth=true,
  id
}) => (
  <main id={id ?? 'BRIDGE_MAIN'} className={cn(
    'flex flex-col justify-start items-center',
    'px-4 md:px-6 xl:px-0',
    standardWidth ? 'max-w-screen-xl w-full lg:mx-auto' : '',
    headerSpace ? 'pt-[44px] md:pt-[80px]' : 'py-4',
    className
  )}>
    {children}
  </main>
)

export default Main