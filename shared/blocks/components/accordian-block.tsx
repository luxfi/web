import React from 'react'

import { cn } from '@/util'

import type { Block, AccordianBlock } from '@/types/block'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/primitives/accordion"
import ApplyTypography from '@/primitives/apply-typography'

const AccordianBlockComponent: React.FC<{
  block: Block
  className?: string
}> = ({
  block,
  className=''
}) => {

  if (block.blockType !== 'accordian') {
    return <>accordian block required</>
  }

  const accordian = block as AccordianBlock

  return (
    <Accordion type="single" collapsible className={cn('w-full border rounded-xl overflow-hidden', className)}>
      {accordian.items.map((item, index) => (
      <AccordionItem className='border-b last:border-0 overflow-hidden' value={`value-${index}`} key={index}>
        <AccordionTrigger className='px-3 md:px-4 lg:px-6 hover:no-underline hover:bg-level-3' >
          <ApplyTypography>
            {/* styles specific to accordion.  From old site */}
            <h6 className='leading-[1.2] text-[1.05rem] font-semibold ' >{item.trigger}</h6>
          </ApplyTypography>
        </AccordionTrigger>
        <AccordionContent className='p-4 border-t bg-level-1'>
        <ApplyTypography className='flex flex-col justify-start items-start '>
          {(typeof item.content === 'string') ? (<p>{item.content}</p>) : item.content} 
        </ApplyTypography>
        </AccordionContent>
      </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordianBlockComponent
