import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/primitives/accordion"

import { type AccordianBlock } from '@/content/types'
import ApplyTypography from '@/primitives/apply-typography'

const AccordianBlockComponent: React.FC<{
  accordian: AccordianBlock
  className?: string
}> = ({
  accordian,
  className=''
}) => (
  <Accordion type="single" collapsible className={'w-full border border-border-accented rounded-xl ' + className}>
    {accordian.items.map((item, index) => (
    <AccordionItem className='border-border-accented last:border-0' value={`value-${index}`} key={index}>
      <AccordionTrigger className='px-4 hover:no-underline' >
        <h6 className='font-medium text-lg text-card-foreground'>{item.trigger}</h6>
      </AccordionTrigger>
      <AccordionContent className='p-4 border-t border-border-accented bg-accent'>
      <ApplyTypography className='flex flex-col justify-start items-start'>
      {(typeof item.content === 'string') ? (
          <p>{item.content}</p>
        ) : item.content }
      </ApplyTypography>
      </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
)

export default AccordianBlockComponent
