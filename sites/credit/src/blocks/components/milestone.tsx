import {  type BlockComponentProps, EnhHeadingBlockComponent } from '@hanzo/ui/blocks'
import Link from 'next/link'
import React from 'react'
import type MilestoneBlock from '../def/milestone'

const MilestoneBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'milestone') {
    return <>milestone block required</>
  }

  const b = block as MilestoneBlock

  return (
    <div className='flex flex-col items-center sm:flex-row gap-2 sm:gap-12 max-w-[50rem]'>
      <div className='my-auto w-fit'>
        {b.icon}
      </div>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <EnhHeadingBlockComponent block={b.text} className='typography-p:text-xs typography-p:sm:text-base'/>
        {b.href && <Link href={b.href} className='w-fit'>Learn more</Link>}
      </div>
    </div>
  )
}

export default MilestoneBlockComponent