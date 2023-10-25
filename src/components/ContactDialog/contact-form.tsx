'use client'

import React, { useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import validator from 'validator'

import { Loader2 } from 'lucide-react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/primitives/form'

import type { ContactInfo  } from '@/content/types'
import type { SubmitServerAction } from '@/content/types/link-item-def'

import Button from '@/primitives/button'
import Input from '@/primitives/input'

const ValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email must be provided." })
    .email("Invalid email."),
  phone: z
    .string()
    .min(1, { message: "Telephone must be provided." })
    .refine(validator.isMobilePhone, { message: "Invalid format." })
})

const ContactForm: React.FC<{
  onSubmit: SubmitServerAction
  enclosure: any
}> = ({
  onSubmit,
  enclosure
}) => {

  const form = useForm<ContactInfo>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
  })

  const [isPending, startTransition] = useTransition()

  const onFormSubmit: SubmitHandler<ContactInfo> = (data) => {
    // https://github.com/orgs/react-hook-form/discussions/10757#discussioncomment-6672403
    startTransition(async () => {
      await onSubmit(data, enclosure)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="w-3/4">
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className="space-y-0" >
              <div className="flex flex-row items-center gap-2">
                <FormLabel className="text-right w-1/4 flex-none">Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@yourdomain.com" {...field} className="mt-0 grow"/>
                </FormControl>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-right w-1/4 flex-none invisible">dummy</div>
                <FormMessage className='grow'/>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem className="space-y-0" >
              <div className="flex flex-row items-center gap-2">
                <FormLabel className="text-right w-1/4 flex-none">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="999-999-9999" {...field} className="mt-0 flex-1"/>
                </FormControl>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-right w-1/4 flex-none invisible">dummy</div>
                <FormMessage className='flex-1'/>
              </div>
            </FormItem>
          )}
        />
        <div className='flex flex-row justify-center mt-4'>
          <Button disabled={isPending} type='submit'>
            {isPending ? (<>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </div>

      </form>
      </Form>
  )
}

export default ContactForm
