import React from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const RowHeading: React.FC<{
  title: string,
  description?: string
  clx?: string
}> = ({
  title,
  description,
  clx
}) => {
  return (
    <ApplyTypography className={cn('flex flex-col !gap-0 mt-2 lg:gap-7', clx)}>
      <h5 className='font-heading !my-0'>{title}</h5>
      {description && <p className='italic text-sm mb-2'>{description}</p>}
    </ApplyTypography>
  )
}

export default RowHeading