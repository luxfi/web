'use client'

import { useRouter } from "next/navigation"
import { ChevronLeft } from 'lucide-react'
import { Button } from '@hanzo/ui/primitives'

const BackButton = () => {
  const router = useRouter()

  return (
    <Button size='icon' variant='ghost' onClick={() => router.back()}>
      <ChevronLeft/>
    </Button>
  )
}

export default BackButton
