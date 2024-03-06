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
import { BookUser } from 'lucide-react'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
 
const ShippingInfo: React.FC<{
  form: any,
  formSchema: any,
  onSubmit: any,
  setStep: (step: number) => void
}> = ({
  form,
  formSchema,
  onSubmit,
  setStep
}) => {  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='text-left'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <BookUser />
            <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
              heading: { text: `Shipping address`, level: 4 },
            } as EnhHeadingBlock}/>
          </div>
          <div className='flex gap-4 items-end'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex gap-4 items-end'>
            <FormField
              control={form.control}
              name='addressLine1'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Address line 1</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='addressLine2'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Address line 2 (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex gap-4 items-end'>
            <FormField
              control={form.control}
              name='zipCode'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Zip code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex gap-4 items-end'>
            <FormField
              control={form.control}
              name='state'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>State (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='country'
              render={({ field }) => (
                <FormItem className='space-y-1 w-full'>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <Button variant='outline' onClick={() => setStep(0)}>Back</Button>
          <Button type='submit'>Continue</Button>
        </div>
      </form>
    </Form>
  )
}

export default ShippingInfo