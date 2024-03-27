import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const RowHeading: React.FC<{
  title: string,
  description?: string
  className?: string
}> = ({
  title,
  description,
  className
}) => {
  return (
    <ApplyTypography className={cn('flex flex-col !gap-0 lg:gap-7 col-span-2', className)}>
      <h4 className='font-nav'>{title}</h4>
      {description && <p className='italic text-sm mb-2'>{description}</p>}
    </ApplyTypography>
  )
}

export default RowHeading