'use client'

import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/primitives/dialog"

import type { LinkModalProps} from '@/content/types/link-item-def'
import ContactForm from './contact-form'
import Disclaimer from './disclaimer.mdx'

const ContactDialog: React.FC<LinkModalProps> = ({
  open,
  onOpenChange,
  trigger,
  title,
  byline,
  onSubmit,
  submitEnclosure
}) => {

   return (
    <Dialog  open={open} onOpenChange={onOpenChange} >
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 light-theme">
        <DialogHeader className='py-6  text-foreground'>
          <DialogTitle className='text-4xl font-heading text-center text-inherit'>{title}</DialogTitle>
          {byline && (<DialogDescription className='text-inherit text-xl text-center'>{byline} </DialogDescription>)}
        </DialogHeader>
        <div className='p-8 rounded-e-lg flex flex-col justify-start items-center'>
          <ContactForm onSubmit={onSubmit} enclosure={submitEnclosure}/>
          <div className='text-muted-foreground text-xs mt-4' >
            <Disclaimer />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
