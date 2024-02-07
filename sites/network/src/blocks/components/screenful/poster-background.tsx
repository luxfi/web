import React, { type PropsWithChildren } from 'react'

import type { VideoBlock } from '@luxdefi/ui/blocks'
import { cn } from '@luxdefi/ui/util'

const Poster: React.FC<{
  banner: VideoBlock | string | undefined,
  className?: string
} & PropsWithChildren> = ({
  children,
  banner,
  className=''
}) => (
  banner ? (
    <div 
      className={cn('relative', className)} 
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${(typeof banner === 'string') ? banner : banner.poster!})`,
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
