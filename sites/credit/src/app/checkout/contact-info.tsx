'use client'
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@hanzo/ui/primitives/form'
import { Input, Button } from '@hanzo/ui/primitives'
import { User } from 'lucide-react'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import type { UseFormReturn } from 'react-hook-form'
 
const ContactInfo: React.FC<{
  form: UseFormReturn<{
    name: string;
    email: string;
  }, any, {
    name: string;
    email: string;
  }>,
  selectPaymentMethod: (method: 'crypto' | 'bank') => Promise<void>,
}> = ({
  form,
  selectPaymentMethod,
}) => {
  return (
    <Form {...form}>
      <form className='text-left'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <User />
            <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
              heading: { text: `Contact Info`, level: 4 },
            } as EnhHeadingBlock}/>
          </div>
          <div className='flex gap-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex gap-4 items-center'>
            <Button
              type='button'
              onClick={() => selectPaymentMethod('crypto')}
              className='mx-auto w-full'
            >
              Pay with crypto
            </Button>
            <Button
              type='button'
              onClick={() => selectPaymentMethod('bank')}
              className='mx-auto w-full'
            >
              Bank transfer
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default ContactInfo