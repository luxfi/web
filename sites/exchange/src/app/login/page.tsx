'use client'

import { useRouter } from 'next/navigation'

import { Main } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { LoginPanel } from '@luxdefi/common'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const review = {
  author: 'Giovanna Mingarelli',
  title: 'Lux Defi is Amazing!',
  text: 'Lux Defi is amazing! It\'s revolutionizing the blockchain world by seamlessly merging commodities like gold and silver with digital technology. Their credit card has the ability to make transactions that let you borrow from any of your Lux assets in real time! A total game-changer and I highly recommend it.',
}

const Page = ({ searchParams }: Props ) => {
  const router = useRouter()

  const handleCheckoutDone = () => {
    router.back()
  }
  // max-w-screen-2xl 2xl:w-[1500px] 
  return (
    <Main id='CHECKOUT_MAIN' className={cn(
      '!px-0 !py-0',
      'w-full h-[100vh] max-w-full 2xl:w-full',
      'animate-in md:zoom-in-90',
      'shadow-lg bg-background'
    )}>
      <LoginPanel
        close={handleCheckoutDone}
        getStartedUrl='/'
        redirectUrl={searchParams?.redirectUrl as string ?? undefined}
      >
        <div className='flex flex-col gap-3'>
          <p>“{review.text}“</p>
          <p className='text-sm'>{review.author}</p>
        </div>
      </LoginPanel>
    </Main>
  )
}

export default Page
