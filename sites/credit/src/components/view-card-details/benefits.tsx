import { cn } from '@hanzo/ui/util'
import { Card as CardComponent } from '@hanzo/ui/primitives'
import { ImageBlockComponent } from '@hanzo/ui/blocks'

import type { Card } from '@/types/card'

const Benefits: React.FC<{
  card: Card
  clx?: string
}> = ({
  card,
  clx
}) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-3 items-center', clx)}>
      <div className='flex flex-col items-center col-span-2 gap-3'>
        <h3>Unique {card.title} Benefits</h3>
        <h6>An all access pass to elevated living and memorable moments.</h6>
      </div>
      {card.cardDetails.benefits.map(({img, title, description}, index) => (
        <CardComponent key={index} className='flex flex-col items-center gap-2 h-full'>
          <ImageBlockComponent block={{blockType: 'image', ...img}} className='w-full'/>
          <div className='flex flex-col gap-2 p-4'>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </CardComponent>
      ))}
    </div>
  )
}

export {
  Benefits as default
}