'use client'

import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { useRouter } from 'next/navigation'
import type { LinkDef } from '@hanzo/ui/types'
import { useCurrentUser } from '@hanzo/auth/service/AuthContext'
import LoginUi from '@hanzo/auth/components/login'
import { signOut } from '@hanzo/auth/lib/firebase/auth'

const Login: React.FC<{redirectUrl?: string, getStartedUrl?: string}> = ({redirectUrl, getStartedUrl}) => {
  const router = useRouter()
  const user = useCurrentUser()

  const elements: LinkDef[] = [{title: 'Sign Out', variant: 'outline', href: '/'}];
  if (getStartedUrl) {
    elements.push({title: 'GET STARTED', variant: 'primary', href: getStartedUrl});
  }

  const logout = async () => {
    const isOk = await signOut()
  }

  return (
    <ApplyTypography className='w-full'>
      <div className='w-full max-w-[30rem] mx-auto'>
      {user ? (
        <div className='flex flex-col text-center gap-4'>
          <h3>Welcome!</h3>
          <p>You are signed in as {user.email}</p>
          <div className='flex gap-4 items-center justify-center'>
            <Button onClick={() => logout()} variant='outline'>Sign Out</Button>
            {getStartedUrl && <Button variant='primary' onClick={() => router.push(getStartedUrl)}>GET STARTED</Button>}
          </div>
        </div>
      ) : (
        <LoginUi redirectUrl='/'/>
      )}
      </div>
    </ApplyTypography>
  )
}

export default Login

