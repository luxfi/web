import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/primitives/accordion"

import { type AccordianBlock } from '@/content/types'

const AccordianBlockComponent: React.FC<{
  accordian: AccordianBlock
  className?: string
}> = ({
  accordian,
  className=''
}) => (
  <Accordion type="single" collapsible className={'w-full border border-border-accented rounded-xl ' + className}>
    {accordian.items.map((item, index) => (
    <AccordionItem className='border-border-accented last:border-0 ' value={`value-${index}`} key={index}>
      <AccordionTrigger className='px-4 hover:no-underline ' >
        <h6 >{item.trigger}</h6>
      </AccordionTrigger>
      <AccordionContent className='p-4 border-t border-border-accented bg-accent'>
      {(typeof item.content === 'string') ? (
          <p>{item.content}</p>
        ) : item.content }
      </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
)

export default AccordianBlockComponent
