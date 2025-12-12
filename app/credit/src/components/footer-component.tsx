import React from 'react'
import { Button, LinkElement } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

export const FooterComponent: React.FC = () => {
  return (
    <div className='w-full bg-background border-t border-muted-3 py-12 md:py-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='font-heading text-2xl sm:text-3xl md:text-4xl mb-4'>
            READY TO START YOUR JOURNEY?
          </h2>
          <p className='text-muted-2 mb-8 max-w-2xl'>
            Join the Lux Credit revolution and experience the future of finance today.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mb-8'>
            <Button variant='primary' size='lg' className='min-w-[200px]'>
              Get Started
            </Button>
            <Button variant='outline' size='lg' className='min-w-[200px]'>
              Learn More
            </Button>
          </div>
          <div className='text-muted-2 text-sm'>
            <p className='mb-2'>Trusted by thousands of users worldwide</p>
            <p>Secure • Fast • Innovative</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent