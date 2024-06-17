'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { ChevronLeft } from 'lucide-react'


import { 
  Button, 
  buttonVariants, 
} from '@hanzo/ui/primitives'

import type { VariantProps } from '@hanzo/ui/util'

const BackButton: React.FC<{
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  clx?: string
  iconClx?: string
}> = ({
  variant='ghost',
  size='default',
  clx='',
  iconClx='',
}) => {

  const router = useRouter()
  const back = () => {router.back()}

  return (
    <Button
      variant={variant}
      size={size}
      onClick={back}
      className={clx}
    >
      <ChevronLeft className={iconClx}/>
    </Button> 
  )
}

export default BackButton
