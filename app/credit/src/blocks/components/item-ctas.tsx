import React  from 'react'

import { cn } from '@hanzo/ui/util'
import { LinkElement, buttonVariants, Button } from '@hanzo/ui/primitives'
import { type Block} from '@hanzo/ui/blocks'

// Temporarily disabled - causes Firebase import
// import { BuyButton } from '@luxfi/ui'

import type ItemCTAsBlock from '@/blocks/def/item-ctas'

// Temporary placeholder for BuyButton
const BuyButtonPlaceholder: React.FC<{
  skuPath: string
  size?: string
  variant?: string
  className?: string
  children?: React.ReactNode
}> = ({ className, children }) => (
  <Button variant='primary' size='default' className={className}>
    {children}
  </Button>
)

const ItemCTAsBlockComponent: React.FC<{
  block: Block
  className?: string
  agent?: string
}> = ({
  block,
  className='',
  agent
}) => {

  if (block.blockType !== 'item-ctas') {
    return <>item-ctas block required</>
  }
  const ctas = block as ItemCTAsBlock

  return (ctas.skuPath || ctas.otherLink) ? (
    <div className={cn(
      (ctas.skuPath && ctas.otherLink) ? ' !w-full sm:w-auto grid grid-cols-2 gap-2' : 'flex flex-row',
      'sm:flex sm:flex-row items-center sm:gap-4 lg:gap-6 self-center',
      className
    )}>
    {ctas.otherLink && (
      <LinkElement
        def={{
          href: ctas.otherLink.href,
          title: ctas.otherLink.title ? ctas.otherLink.title : 'Learn More'
        }}
        className={cn(
          buttonVariants({
            variant: ctas.skuPath ? 'outline' : 'primary',
            size: 'default',
            rounded: 'md' }),
          '!w-full max-w-56'
        )}
      />
    )}
    {ctas.skuPath && (
      <BuyButtonPlaceholder
        skuPath={ctas.skuPath}
        size='default'
        variant='primary'
        className='!w-full max-w-56'
      >
        {ctas.buyLabel ? ctas.buyLabel : 'Buy Now'}
      </BuyButtonPlaceholder>
    )}
    </div>
  ) : null
}

export default ItemCTAsBlockComponent
