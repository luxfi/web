'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

//import { getAuth } from 'firebase/auth'

import { type User, onAuthStateChanged, signOut} from 'firebase/auth'
import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { useRouter } from 'next/navigation'
import type { LinkDef } from '@hanzo/ui/types'
import { auth } from '@/service/firebase'

// @ts-ignore
const FirebaseUIComp = dynamic(() => import('firebaseui-react'), {
  ssr: false,
})

const AuthComponent: React.FC<{redirectUrl?: string}> = ({redirectUrl}) => {
  const router = useRouter()

  const config = {
    // link back to this page for password resets
    continueUrl: document.location.href,
    signInOptions: [
      "emailpassword", 
      "google.com",
      'facebook.com',
      'github.com'
    ],
    callbacks: {
      signInSuccessWithAuthResult: (user: any) => {
        console.log("successfully authenticated", user);
        redirectUrl && router.push(redirectUrl)
      },
      signInFailure: (error: any) => {
        console.log("somtin went wrong :9 :((");
        console.error(error);
      },
    },
    formLabelStyles: { color: "#fff" },
  }

    // @ts-ignore
  return <FirebaseUIComp auth={auth} config={config} />
}

const AuthUiComponent: React.FC<{redirectUrl?: string, getStartedUrl?: string}> = ({redirectUrl, getStartedUrl}) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(auth.currentUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe();
  }, [auth])

  const elements: LinkDef[] = [{title: 'Sign Out', variant: 'outline', href: '/'}];
  if (getStartedUrl) {
    elements.push({title: 'GET STARTED', variant: 'primary', href: getStartedUrl});
  }

  return (
    <ApplyTypography className='w-full'>
      <div className='w-full max-w-[30rem] mx-auto'>
      {user ? (
        <div className='flex flex-col text-center gap-4'>
          <h3>Welcome!</h3>
          <p>You are signed in as {user.email}</p>
          <div className='flex gap-4 items-center justify-center'>
            <Button onClick={() => signOut(auth)} variant='outline'>Sign Out</Button>
            {getStartedUrl && <Button variant='primary' onClick={() => router.push(getStartedUrl)}>GET STARTED</Button>}
          </div>
        </div>
      ) : (
        <AuthComponent redirectUrl={redirectUrl}/>
      )}
      </div>

    </ApplyTypography>
  )
}

export default AuthUiComponent

