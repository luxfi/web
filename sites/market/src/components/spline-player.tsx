'use client'

import { cn } from '@hanzo/ui/util'
import Spline from '@splinetool/react-spline'

const SplinePlayer: React.FC<{
  src: string,
  className?: string
}> = ({
  src,
  className
}) => {
  return (
    <Spline scene={src} className={cn('!w-full !h-auto pointer-events-none', className)}/>
  )
}

export default SplinePlayer