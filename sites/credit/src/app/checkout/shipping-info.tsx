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
import { useAuth } from '@hanzo/auth/service'
import { useCommerce } from '@hanzo/commerce'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const shippingFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  addressLine1: z.string().min(2, 'Address must be at least 2 characters.'),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(2, 'Zip code is invalid.'),
  city: z.string().min(2, 'City is invalid.'),
  state: z.string().optional(),
  country: z.string().min(2, 'Country is invalid.'),
})

const ShippingInfo: React.FC<{
  orderId?: string,
  paymentMethod?: string,
  setCurrentStep: (currentStep: number) => void
}> = ({
  orderId,
  paymentMethod,
  setCurrentStep
}) => { 
  const auth = useAuth()
  const cmmc = useCommerce()
  
  const shippingForm = useForm<z.infer<typeof shippingFormSchema>>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
      city: '',
      state: '',
      country: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof shippingFormSchema>) => {
    if (auth.user && orderId && paymentMethod) {
      await cmmc.updateOrder(orderId, auth.user.email, paymentMethod, values)
    }
    setCurrentStep(4)
  }

  return (
    <Form {...shippingForm}>
      <form onSubmit={shippingForm.handleSubmit(onSubmit)} className='text-left'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <BookUser />
            <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
              heading: { text: `Shipping address`, level: 4 },
            } as EnhHeadingBlock}/>
          </div>
          <div className='flex gap-4 items-end'>
            <FormField
              control={shippingForm.control}
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
              control={shippingForm.control}
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
              control={shippingForm.control}
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
              control={shippingForm.control}
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
              control={shippingForm.control}
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
              control={shippingForm.control}
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
              control={shippingForm.control}
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
              control={shippingForm.control}
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

        <div className='flex gap-4 items-center mt-6'>
          <Button variant='outline' onClick={() => setCurrentStep(2)} className='mx-auto w-full'>Back</Button>
          <Button type='submit' className='mx-auto w-full'>Confirm order</Button>
        </div>
      </form>
    </Form>
  )
}

export default ShippingInfo