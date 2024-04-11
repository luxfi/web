'use client'

import { useRouter } from 'next/navigation'

import { LoginPanel } from '@luxdefi/common'

const reviews = [
  {
    text: 'Lux Defi is amazing! It\'s revolutionizing the blockchain world by seamlessly merging commodities like gold and silver with digital technology. Their credit card has the ability to make transactions that let you borrow from any of your Lux assets in real time! A total game-changer and I highly recommend it.',
    author: 'Giovanna Mingarelli',
    href: 'https://trstp.lt/a55NNi_j9'
  },
  {
    text: 'Lux is the best! Highly recommend this great service for anyone interested in the space. Better than several competitors, good interface. Big fan of the product team and the mission.',
    author: 'Ben Chu',     
    href: 'https://trstp.lt/PtpL8qO-U'
  },
  {
    text: 'Setting the bar for innovation, development and execution within an ever evolving market of tech, AI, gaming, Blockchain design and Intelectual Property management.... World class leaders in the future of conceptual development of metaverse and integrated, interactive systems.',
    author: 'Ole Brereton',     
    href: 'https://trstp.lt/gOB3GTbOb'
  },
  {
    text: 'As an art collector and real estate executive, I value unique investments. Lux Defi, merging real-world assets with blockchain, is a refreshing addition alongside my art works and other assets. It\'s a smart, exciting way to diversify my portfolio.',
    author: 'Lisa Goodman',     
    href: 'https://trstp.lt/GfjNiLa7D'
  }
]

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  const router = useRouter()

  const handleLoginDone = () => {
    router.back()
  }
  // max-w-screen-2xl 2xl:w-[1500px] 
  return (
    <LoginPanel
      close={handleLoginDone}
      getStartedUrl='/'
      redirectUrl={searchParams?.redirectUrl as string ?? undefined}
      reviews={reviews}
    />
  )
}

export default Page
