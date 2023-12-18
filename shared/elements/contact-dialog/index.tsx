'use client'

import React from 'react'

import type { ButtonModalProps} from '@luxdefi/ui'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@luxdefi/ui/primitives'

import ContactForm from './contact-form'
import Disclaimer from './disclaimer.mdx'

const ContactDialog: React.FC<ButtonModalProps> = ({
  open,
  onOpenChange,
  buttonText,
  buttonProps,
  title,
  byline,
  action,
  actionEnclosure
}) => (
  <Dialog open={open} onOpenChange={onOpenChange} >
    <DialogTrigger asChild>
      <Button {...buttonProps} >{buttonText}</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px] p-0 gap-0 light-theme">
      <DialogHeader className='py-6  text-foreground'>
        <DialogTitle className='text-4xl font-heading text-center text-inherit'>{title}</DialogTitle>
        {byline && (<DialogDescription className='text-inherit text-xl text-center'>{byline} </DialogDescription>)}
      </DialogHeader>
      <div className='p-8 rounded-e-lg flex flex-col justify-start items-center'>
        <ContactForm onSubmit={action} enclosure={actionEnclosure}/>
        <div className='text-muted-1 text-xs mt-4' >
          <Disclaimer />
        </div>
      </div>
    </DialogContent>
  </Dialog>
)

export default ContactDialog
