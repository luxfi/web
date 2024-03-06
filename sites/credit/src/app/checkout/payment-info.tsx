'use client'
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@hanzo/ui/primitives/form'
import { Input, Button, ApplyTypography, Checkbox } from '@hanzo/ui/primitives'
import { Lock, User } from 'lucide-react'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
 
const PaymentInfo: React.FC<{
  form: any,
  formSchema: any,
  onSubmit: any
}> = ({
  form,
  formSchema,
  onSubmit
}) => {
  const [terms, setTerms] = useState(false)
  const router = useRouter()
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='text-left'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <User />
            <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
              heading: { text: `Contact Details`, level: 4 },
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
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <ApplyTypography>
              <h4 className='flex gap-4 items-center'><Lock /> Payment Info</h4>
              <p>Guaranteed safe & secure checkout.</p>
            </ApplyTypography>
          </div>
          <div className='flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='cardName'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Name on card</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='cardNumber'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Card number</FormLabel>
                  <FormControl>
                    <Input {...field} maxLength={16}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex gap-4 w-full'>
              <FormField
                control={form.control}
                name='cardExpiryDate'
                render={({ field }) => (
                  <FormItem className='space-y-1 w-full'>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input {...field} maxLength={5}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='cardCvc'
                render={({ field }) => (
                  <FormItem className='space-y-1 w-full'>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input {...field} maxLength={3}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onCheckedChange={checked => setTerms(!!checked)} />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                I agree with Lux's terms and conditions
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <Button variant='outline' onClick={() => router.push('/')}>Back</Button>
          <Button type='submit' disabled={!terms}>Continue</Button>
        </div>
      </form>
    </Form>
  )
}

export default PaymentInfo