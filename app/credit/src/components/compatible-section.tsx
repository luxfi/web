import React from 'react'
import { Button } from '@hanzo/ui/primitives'
import { BlocksComponent } from '@hanzo/ui/blocks'

const byline = 'Every card lets you earn points that pay off your balance, AND has access to exclusive Lux Card Benefits.'

const viewAllCards = {
  blockType: 'element',
  element: <a href='/cards' style={{textDecoration: 'none'}}><Button variant='outline' className='!w-full max-w-56'>View All Cards</Button></a>
}

const compare = {
  blockType: 'element',
  element: <a href='/compare' style={{textDecoration: 'none'}}><Button variant='primary' className='!w-full max-w-56'>Compare Cards</Button></a>
}

export const CompatibleSection: React.FC = () => {
  return (
    <div className='w-full py-12 md:py-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='font-heading text-2xl sm:text-3xl md:text-4xl mb-4'>
            COMPATIBLE WITH YOUR LIFESTYLE
          </h2>
          <p className='text-muted-2 mb-8 max-w-2xl'>
            {byline}
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <BlocksComponent blocks={[viewAllCards, compare]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompatibleSection