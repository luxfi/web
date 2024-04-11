import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@hanzo/ui/util'
import { Button, Carousel, CarouselContent, CarouselItem } from '@hanzo/ui/primitives'
import { LoginPanel as Login } from '@hanzo/auth/components'

import { Logo } from '..'
import LuxLogo from '../icons/lux-logo'

const LoginPanel: React.FC<{
  close: () => void
  getStartedUrl?: string
  redirectUrl?: string
  className?: string
  reviews: { text: string, author: string, href: string }[]
}> = ({
  close,
  getStartedUrl='/',
  redirectUrl,
  className='',
  reviews
}) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2', className)}>
      <div className='hidden md:flex w-full h-full bg-level-1 flex-row items-end justify-end overflow-y-auto min-h-screen'>
        <div className='h-full w-full max-w-[750px] px-8 pt-0'>
          <div className='h-full w-full max-w-[550px] mx-auto flex flex-col justify-between min-h-screen py-10'>
            <Button
              variant='ghost'
              onClick={close}
              className='w-fit !min-w-0 p-2'
            >
              <Logo size='md' spanClassName='!cursor-pointer' layout='text-only'/>
            </Button>  
            <Carousel
              options={{ align: 'center', loop: true }}
              className='w-full'
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {reviews.map(({text, author, href}, index) => (
                  <CarouselItem key={index}>
                    <Link href={href} className='flex flex-col gap-3 cursor-pointer'>
                      <p>“{text}“</p>
                      <p className='text-sm'>{author}</p>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-background flex flex-row items-center'>
        <div className='w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0 text-center'>
          <div className='relative h-full w-full max-w-[400px] mx-auto flex flex-col gap-4 items-center py-10'>
            <Button
              variant='ghost'
              onClick={close}
              className='block md:hidden absolute rounded-full p-2 left-0 h-auto hover:bg-background'
            >
              <LuxLogo className='w-5 h-5'/>
            </Button>
            {/* TODO: add Terms of Service and Privacy Policy links */}
            <Login 
              getStartedUrl={getStartedUrl} 
              redirectUrl={redirectUrl}
              className='w-full max-w-sm'
              termsOfServiceUrl=''
              privacyPolicyUrl=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPanel
