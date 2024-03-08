'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { Button, type ButtonSizes, type ButtonVariants } from '@hanzo/ui/primitives'
import { ChevronLeft } from 'lucide-react'

const BackButton: React.FC<{
  variant: ButtonVariants
  size?: ButtonSizes
  className?: string
  iconClx?: string
}> = ({
  variant,
  size='default',
  className='',
  iconClx=''
}) => {

  const router = useRouter()
  const back = () => {router.back()}

  return (
    <Button
      variant={variant}
      size={size}
      onClick={back}
      className={className}
    >
      <ChevronLeft className={iconClx}/>
    </Button>  )
}

export default BackButton
