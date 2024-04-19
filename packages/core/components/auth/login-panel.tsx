'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { getCookie } from 'cookies-next'

import { cn } from '@hanzo/ui/util'
import { Button, Carousel, CarouselContent, CarouselItem } from '@hanzo/ui/primitives'
import { LoginPanel as Login } from '@hanzo/auth/components'

import { Logo } from '..'
import LuxLogo from '../icons/lux-logo'
import { legal } from '../../site-def/footer'
import domains from './common-auth-domains'
import SetAuthToken from './auth-token/set-auth-token'
import ClearAuthToken from './auth-token/clear-auth-token'

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
  const router = useRouter()

  const [authToken, setAuthToken] = useState<string>(getCookie('auth-token') ?? '')

  const termsOfServiceUrl = legal.find(({title}) => title === 'Terms and Conditions')?.href || ''
  const privacyPolicyUrl = legal.find(({title}) => title === 'Privacy Policy')?.href || ''

  const onLogin = (token: string) => {
    setAuthToken(token)

    const promises = domains.map(({url}) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          document.body.appendChild(img)
          resolve()
        }
        img.onerror = reject
        img.src = url
      })
    })
  
    Promise.all(promises)
      .then(() => redirectUrl && router.replace(redirectUrl))
      .catch(error => console.error('An image failed to load', error));
  }

  return (<>
    {!!authToken && <SetAuthToken authToken={authToken} />}
    {!authToken && <ClearAuthToken />}

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
            <Login
              getStartedUrl={getStartedUrl}
              redirectUrl={redirectUrl}
              className='w-full max-w-sm'
              termsOfServiceUrl={termsOfServiceUrl}
              privacyPolicyUrl={privacyPolicyUrl}
              onLoginChanged={onLogin}
            />
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default LoginPanel
