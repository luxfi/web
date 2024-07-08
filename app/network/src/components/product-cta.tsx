'use client'

import { useRouter } from 'next/navigation'

import { BuyButton } from '@luxfi/ui'
import { Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const ProductCTA: React.FC<{
  learnMoreText: string,
  learnMoreUrl: string,
  skuPath: string,
  className?: string
}> = ({
  learnMoreText,
  learnMoreUrl,
  skuPath,
  className
}) => {
  const router = useRouter()

  return (
    <div className={cn('w-full flex justify-center items-center gap-4', className)}>
      <Button onClick={() => router.push(learnMoreUrl)} variant='outline' className='w-full'>{learnMoreText}</Button>
      <BuyButton skuPath={skuPath} className='w-full'>Buy</BuyButton>
    </div>
  )
}

export default ProductCTA