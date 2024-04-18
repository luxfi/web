'use client'

import { useEffect } from 'react'
import { useAuth } from '@hanzo/auth/service'

const AuthListener = () => {
  const auth = useAuth()

  const requestAuthToken = () => {
    const childFrame = document.getElementById('login') as HTMLIFrameElement
    childFrame?.contentWindow?.postMessage(true, process.env.NEXT_PUBLIC_LOGIN_SITE_URL ?? '')
  }

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.origin === process.env.NEXT_PUBLIC_LOGIN_SITE_URL) {
        const token = event.data
        auth.loginWithCustomToken(token)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleMessage)

      return () => {
        window.removeEventListener('message', handleMessage)
      }
    }
  }, [])

  return (
    <iframe
      id='login'
      onLoad={requestAuthToken}
      src={`${process.env.NEXT_PUBLIC_LOGIN_SITE_URL}/login`}
      className='hidden'
    />
  )
}

export default AuthListener
