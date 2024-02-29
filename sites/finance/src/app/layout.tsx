import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport as _viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'

import siteDef from '../siteDef'
import _metadata from '../metadata'
import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import Header from '@/components/header'

export const metadata = {
  ..._metadata
}

export const viewport = {
  ..._viewport
}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  {
  const currentUser = await getUserServerSide()

  return (
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <RootLayoutCommon siteDef={siteDef} header={false} >
        <Header siteDef={siteDef}/>
        {children}
      </RootLayoutCommon>
    </AuthServiceProvider>
  )
}

export default RootLayout