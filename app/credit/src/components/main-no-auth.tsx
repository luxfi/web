import type { PropsWithChildren, FC } from 'react'
import { cn } from '@hanzo/ui/util'

// Local Main component to avoid Firebase imports from @luxfi/ui barrel export
const MainNoAuth: FC<PropsWithChildren & {
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
  <main id={id ?? 'LUX_UI_MAIN'} className={cn(
    'flex flex-col justify-start items-center',
    'px-4 md:px-6 lg:px-8',
    standardWidth ? 'max-w-screen-2xl w-full lg:mx-auto' : '',
    headerSpace ? 'pt-[44px] md:pt-[80px]' : 'py-4',
    className
  )}>
    {children}
  </main>
)

export default MainNoAuth
