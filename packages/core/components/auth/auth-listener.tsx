'use client'

import { useEffect } from "react"
import { useAuth } from '@hanzo/auth/service'

const AuthListener = () => {
  const auth = useAuth()

  useEffect(() => {
    if (!!localStorage.getItem('auth-token')) {
      console.log("Detected auth-token cookie... Logging in...")
      auth.loginWithCustomToken(localStorage.getItem('auth-token') as string)
    }

    const handleMessage = (event: any) => {
      if (event.origin === process.env.NEXT_PUBLIC_AUTH_ORIGIN) {
        const token = event.data
        localStorage.setItem('auth-token', token)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (<></>)
}

export default AuthListener