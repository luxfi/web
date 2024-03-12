'use client'

import Link from 'next/link'
import { type BlockComponentProps, EnhHeadingBlockComponent } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import type { Milestone, RoadmapBlock } from '../def/roadmap'

const MilestoneComponent: React.FC<{
  milestone: Milestone,
  className: string
}> = ({
  milestone,
  className
}) => {
  const {icon, text, href} = milestone

  return (
    <div className={cn('flex flex-col items-center sm:flex-row gap-2 sm:gap-12 max-w-[50rem]', className)}>
      <div className='my-auto w-fit'>
        {icon}
      </div>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <EnhHeadingBlockComponent block={text} className='typography-p:text-xs typography-p:sm:text-base'/>
        {href && <Link href={href} className='w-fit'>Learn more</Link>}
      </div>
    </div>
  )
}
const RoadmapBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'roadmap') {
    return <>roadmap block required</>
  }

  const b = block as RoadmapBlock

  return (  
    <div
      className='h-full flex flex-col gap-20 overflow-y-auto pb-20 w-full items-center'
      style={{scrollbarWidth: 'none'}}
    >
      <div className='flex flex-col gap-4 sm:gap-8 mx-auto max-w-[50rem] snap-start'>
        <h3 className='!text-2xl'>{b.title}</h3>
        <p>{b.description}</p>
      </div>

      {b.slides.map((milestone, index) => (
        <MilestoneComponent milestone={milestone} key={index} className='snap-start'/>
      ))}
    </div>
  )
}

export default RoadmapBlockComponent