import { ImageBlockComponent, type BlockComponentProps, type ImageBlock } from '@hanzo/ui/blocks'
import type ReviewBlock from '../def/review'
import { cn } from '@hanzo/ui/util'
import Quote from './icons/quote'
import Link from 'next/link'

const ReviewBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'review') {
    return <>review block required</>
  }

  const b = block as ReviewBlock

  return (
    <div className='flex gap-4 sm:gap-8 mx-auto'>
      <ImageBlockComponent block={b.image as ImageBlock} className='w-20 h-20 rounded-full'/>
      <div className='flex flex-col sm:gap-2'>
        <div className={cn('flex gap-2 sm:gap-6', b.href ? 'cursor-pointer' : '')}>
          <Quote className='h-6 sm:h-9'/>
          {b.href ? <Link href={b.href} target='_blank' className='!no-underline'><h5>{b.title}</h5></Link> : <h5>{b.title}</h5>}
        </div>
        <p className='text-sm sm:text-base'>{b.text}</p>
        <p>-{b.author}</p>
      </div>
    </div>
  )
}

export default ReviewBlockComponent