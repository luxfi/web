import { type PropsWithChildren } from 'react'
import { Main } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import RowHeading from './RowHeading'

const Row: React.FC<{
  key?: number | string,
  title: string,
  description?: string
  isOdd?: boolean
} & PropsWithChildren> = ({
  key,
  title,
  description,
  isOdd,
  children
}) => {
  return (
    <div key={key} className={cn('py-4', isOdd ? 'bg-muted-4' : '')}>
      <Main className='grid grid-cols-2 lg:grid-cols-11 gap-20'>
        <RowHeading title={title} description={description}/>
        {children}
      </Main>
    </div>
  )
}

export default Row