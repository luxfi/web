import React, { type PropsWithChildren } from 'react'

import type { VideoBlock } from '@luxdefi/ui/blocks'
import { cn } from '@luxdefi/ui/util'

const Poster: React.FC<{
  block?: VideoBlock,
  className?: string
} & PropsWithChildren> = ({
  children,
  block,
  className=''
}) => (
  block ? (
    <div 
      className={cn('relative', className)} 
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${block.poster!})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} 
    >
      {children}
    </div>
  ) : (
    <div className={cn('bg-transparent h-full v-full relative', className)}>
      {children}  
    </div>
  )
)

export default Poster
