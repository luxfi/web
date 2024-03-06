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
 
const PaymentInfo: React.FC<{
  form: any,
  selectPaymentMethod: any,
}> = ({
  form,
  selectPaymentMethod,
}) => {
  const onSubmit = (data: any) => {
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='text-left'>
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
        </div>

        <div className='flex gap-6 mt-8 w-full'>
          <Button type='submit' onClick={() => selectPaymentMethod('crypto')} className='mx-auto'>
            Pay with crypto
          </Button>
          <Button type='submit' onClick={() => selectPaymentMethod('bank')} className='mx-auto'>
            Bank transfer
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PaymentInfo