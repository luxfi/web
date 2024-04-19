'use client'

import { useEffect } from 'react'
import { useAuth } from '@hanzo/auth/service'
import { getCookie } from 'cookies-next'

const AuthListener = () => {
  const auth = useAuth()

  useEffect(() => {
    const authToken = getCookie('auth-token')
    if (!!authToken) {
      auth.loginWithCustomToken(authToken)
    }
    else {
      auth.logout()
    }
  }, [])

  return ( <></> )
}

export default AuthListener
