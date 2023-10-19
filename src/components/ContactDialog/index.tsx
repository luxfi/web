'use client'

import React from 'react'
import Button from "@/primitives/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/primitives/dialog"

import Input from "@/primitives/input"
import Label from "@/primitives/label"

import {type DialogProps} from '@/content/types/link-item-def'

const ContactDialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  trigger,
  title,
  byline,
  //onSubmit
}) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-4xl text-center'>{title}</DialogTitle>
          {byline && (<DialogDescription className='text-center'>{byline} </DialogDescription>)}
        </DialogHeader>
        <div className="grid gap-4 py-4" >
          <div className="grid grid-cols-4 items-center gap-4" key='foo'>
            <Label htmlFor="email" className="text-right">
              email
            </Label>
            <Input id="email" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4" key='foo2'>
            <Label htmlFor="phone" className="text-right">
              phone
            </Label>
            <Input id="phone" value="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className=''>
          <Button onClick={() => { console.log("Modal Submitted")}} size='lg'>Submit</Button>
          <p className="text-[10px] text-center mt-4">By entering your phone number and submitting, you consent to receive text messages from Lux at the number provided. Message and data rates may apply. Message frequency varies. You can unsubscribe at any time by replying STOP. View our <a href="#" className=""><span>Privacy Policy</span></a> and <a href="#" className="">Terms &amp; conditions</a>.</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
