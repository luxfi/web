'use client'

import React, { useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, type ControllerRenderProps } from 'react-hook-form'
import * as z from 'zod'
import validator from 'validator'

import { Loader2 } from 'lucide-react'

//import {  type ControllerRenderProps } from '@radix-ui/react-dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/primitives/form'

import type { ContactInfo, ContactInfoFields } from '@/content/types'
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

  const MyFormItem: React.FC<{ 
    field: ControllerRenderProps<ContactInfo, 'email'> | ControllerRenderProps<ContactInfo, 'phone'>  
    placeholder: string
  }> = ({
    field,
    placeholder
  }) => (
  <FormItem className="space-y-0" >
    <FormControl>
      <Input placeholder={placeholder} {...field} className="mt-0 text-foreground"/>
    </FormControl>
    <div className="flex flex-row justify-start items-stretch gap-2">
      <FormMessage />
    </div>
  </FormItem>
)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="w-3/4">
        <div className='flex flex-col justify-start items-stretch mt-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => ( <MyFormItem field={field} placeholder='email'/> )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => ( <MyFormItem field={field} placeholder='phone'/> )}
        />
          <Button disabled={isPending} type='submit' className='bg-primary text-primary-foreground hover:bg-primary-hover'>
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
