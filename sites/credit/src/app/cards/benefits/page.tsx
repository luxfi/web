'use client'

import { useRouter } from "next/navigation"
import { ChevronLeft } from 'lucide-react'

import { Button, Main } from '@hanzo/ui/primitives'

const Page = () => {
  const router = useRouter()
  return (
    <Main className={'flex flex-col gap-4 pt-11'}>
      <div className='flex gap-4 items-center self-start cursor-pointer'>
        <Button size='icon' variant='ghost' onClick={() => router.back()}>
          <ChevronLeft/>
        </Button>
        <div>All Lux Benefits</div>
      </div>
      <p>Learn more about the exclusive benefits only available to Lux card holders and what to expect when you sign up for your Lux card.</p>
      
    </Main>
  )
}

export default Page
