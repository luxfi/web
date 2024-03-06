'use client'

import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { BookUser, Lock, User } from 'lucide-react'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import type { UseFormReturn } from 'react-hook-form'
 
const ConfirmOrder: React.FC<{
  paymentForm: UseFormReturn<{
    name: string;
    email: string;
    cardName: string;
    cardNumber: string;
    cardExpiryDate: string;
    cardCvc: string;
  }, any, {
    name: string;
    email: string;
    cardName: string;
    cardNumber: string;
    cardExpiryDate: string;
    cardCvc: string;
  }>,
  shippingForm: UseFormReturn<{
    firstName: string;
    lastName: string;
    addressLine1: string;
    zipCode: string;
    city: string;
    country: string;
    addressLine2?: string | undefined;
    state?: string | undefined;
  }, any, {
    firstName: string;
    lastName: string;
    addressLine1: string;
    zipCode: string;
    city: string;
    country: string;
    addressLine2?: string | undefined;
    state?: string | undefined;
  }>,
  setStep: (step: number) => void,
  onPayClick: () => void
}> = ({
  paymentForm,
  shippingForm,
  setStep,
  onPayClick
}) => {

  const paymentFormValues = paymentForm.getValues()
  const shippingFormValues = shippingForm.getValues()
  
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-4 items-center'>
        <User />
        <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
          heading: { text: `Contact Details`, level: 4 },
        } as EnhHeadingBlock}/>
      </div>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Contact name', level: 6 },
        byline: { text: paymentFormValues.name, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Contact email', level: 6 },
        byline: { text: paymentFormValues.email, level: 0 },
      } as EnhHeadingBlock}/>

      <div className='flex gap-4 items-center'>
        <ApplyTypography>
          <h4 className='flex gap-4 items-center'><Lock /> Payment Info</h4>
          <p>Guaranteed safe & secure checkout.</p>
        </ApplyTypography>
      </div>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Name on card', level: 6 },
        byline: { text: paymentFormValues.cardName, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Card number', level: 6 },
        byline: { text: paymentFormValues.cardNumber, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Card expiry date', level: 6 },
        byline: { text: paymentFormValues.cardExpiryDate, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Card CVC', level: 6 },
        byline: { text: paymentFormValues.cardCvc, level: 0 },
      } as EnhHeadingBlock}/>

      <div className='flex gap-4 items-center'>
        <BookUser />
        <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
          heading: { text: `Shipping address`, level: 4 },
        } as EnhHeadingBlock}/>
      </div>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'First name', level: 6 },
        byline: { text: shippingFormValues.firstName, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Last name', level: 6 },
        byline: { text: shippingFormValues.lastName, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Address line 1', level: 6 },
        byline: { text: shippingFormValues.addressLine1, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Address line 2 (optional)', level: 6 },
        byline: { text: shippingFormValues.addressLine2, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Zip code', level: 6 },
        byline: { text: shippingFormValues.zipCode, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'City', level: 6 },
        byline: { text: shippingFormValues.city, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'State (optional)', level: 6 },
        byline: { text: shippingFormValues.state, level: 0 },
      } as EnhHeadingBlock}/>
      <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
        heading: { text: 'Country', level: 6 },
        byline: { text: shippingFormValues.country, level: 0 },
      } as EnhHeadingBlock}/>

      <div className='flex justify-between mt-8'>
        <Button variant='outline' onClick={() => setStep(1)}>Back</Button>
        <Button onClick={onPayClick}>Pay</Button>
      </div>
    </div>
  )
}

export default ConfirmOrder