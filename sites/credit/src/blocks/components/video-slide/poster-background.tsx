import React, { type PropsWithChildren } from 'react'

import { cn } from '@luxdefi/ui/util'

const Poster: React.FC<{
  image: string,
  className?: string
} & PropsWithChildren> = ({
  children,
  image,
  className=''
}) => {

  return <div className={cn('border border-accent relative', className)} style={{
    height: '100%',
    width: '100%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }} >{children}</div>
}

export default Poster