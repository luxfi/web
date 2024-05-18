'use client'
import React, {type PropsWithChildren} from 'react'

import { Button, buttonVariants } from '@hanzo/ui/primitives'
import { type VariantProps } from '@hanzo/ui/util'

import { cn } from '@hanzo/ui/util'
import { useBuyOptions } from '../../commerce/ui-context'

const BuyButton: React.FC<
  PropsWithChildren & 
  VariantProps<typeof buttonVariants> & 
  {
    skuPath: string
    className?: string 
  }
> = ({
  skuPath,
  children,
  className='',
  ...rest
}) => {

  const buyOptions = useBuyOptions()
  const handleClick = (): void => { buyOptions.showBuyOptions(skuPath) }
  
  return (
    <Button onClick={handleClick} {...rest} className={cn(className, '')}>
      {children}
    </Button>
  )
}

export default BuyButton
