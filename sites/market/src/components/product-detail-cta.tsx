'use client'

import { useRouter } from 'next/navigation'

import { BuyButton } from '@hanzo/commerce'
import { Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const ProductDetailCTA: React.FC<{
  readMoreUrl: string,
  skuPath: string,
  className?: string
}> = ({
  readMoreUrl,
  skuPath,
  className
}) => {
  const router = useRouter()

  return (
    <div className={cn('w-full flex justify-center items-center gap-4', className)}>
      <Button onClick={() => router.push(readMoreUrl)} variant='outline' className='w-40'>Read more</Button>
      <BuyButton skuPath={skuPath} className='w-40'>Buy</BuyButton>
    </div>
  )
}

export default ProductDetailCTA