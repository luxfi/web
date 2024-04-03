import { cn } from '@hanzo/ui/util'

const MobileViewCardDetails: React.FC<{
  clx: string
}> = ({
  clx,
}) => {
  return (
    <div className={cn('flex flex-col gap-4 pt-11', clx)}>
    </div>
  )
}

export {
  MobileViewCardDetails as default
}