'use client'

import { useRouter } from 'next/navigation'

import { ChatWidget, LoginPanel, SignupPanel } from '@luxfi/ui'
import { useState } from 'react'

const reviews = [
  {
    text: 'Lux Defi is amazing!',
    author: 'Giovanna Mingarelli',
    href: 'https://trstp.lt/a55NNi_j9'
  },
  {
    text: 'Lux is revolutionizing the blockchain world by seamlessly merging commodities like gold and silver with digital technology.',
    author: 'Giovanna Mingarelli',
    href: 'https://trstp.lt/a55NNi_j9'
  },
  {
    text: 'Lux Credit Card has the ability to make transactions that let you borrow from any of your assets in real time! A total game-changer and I highly recommend it.',
    author: 'Giovanna Mingarelli',
    href: 'https://trstp.lt/a55NNi_j9'
  },
  {
    text: 'Lux is the best! Highly recommend this great service for anyone interested in DeFi.',
    author: 'Ben Chu',
    href: 'https://trstp.lt/PtpL8qO-U'
  },
  {
    text: 'Lux is better than several competitors, good interface. Big fan of the product team and the mission.',
    author: 'Ben Chu',
    href: 'https://trstp.lt/PtpL8qO-U'
  },
  {
    text: 'Setting the bar for innovation, development and execution within an ever evolving mix of AI, Blockchain, Design and Finance.',
    author: 'Ole Brereton',
    href: 'https://trstp.lt/gOB3GTbOb'
  },
  {
    text: 'World class leaders in the future of metaverse and integrated, financial systems.',
    author: 'Ole Brereton',
    href: 'https://trstp.lt/gOB3GTbOb'
  },
  {
    text: 'As an art collector and real estate executive, I value unique investments. Lux Defi, merging real-world assets with blockchain, is a refreshing addition.',
    author: 'Lisa Goodman',
    href: 'https://trstp.lt/GfjNiLa7D'
  },
  {
    text: 'Lux, merging real-world assets with blockchain, is a refreshing addition alongside my art works and other assets.',
    author: 'Lisa Goodman',
    href: 'https://trstp.lt/GfjNiLa7D'
  }
]

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props) => {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState(true)

  const handleLoginDone = () => {
    router.back()
  }
  // max-w-screen-2xl 2xl:w-[1500px]
  return (<>
    <div className={isLogin ? '' : 'hidden'}>
      <LoginPanel
        close={handleLoginDone}
        getStartedUrl='/'
        redirectUrl={searchParams?.redirectUrl as string ?? undefined}
        reviews={reviews}
        setIsLogin={setIsLogin}
      />
    </div>
    <div className={isLogin ? 'hidden' : ''}>
      <SignupPanel
        close={handleLoginDone}
        getStartedUrl='/'
        redirectUrl={searchParams?.redirectUrl as string ?? undefined}
        reviews={reviews}
        setIsLogin={setIsLogin}
      />
    </div>
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
    />
  </>)
}

export default Page