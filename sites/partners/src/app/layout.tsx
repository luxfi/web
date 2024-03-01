import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport as _viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'

import siteDef from '../siteDef'
import _metadata from '../metadata'
import { ChatWidget } from '@hanzo/ui/common'

export const metadata = {
  ..._metadata
}

export const viewport = {
  ..._viewport
}

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCommon siteDef={siteDef} >
    {children}
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
      suggestedQuestions={[
        { heading: 'Become Lux Partner', message: 'How do I become Lux partner?', icon: 'GroupLineIcon' },
        { heading: 'Lux Ecosystem', message: 'Tell me more about Lux ecosystem', icon: 'GlobalLineIcon' },
      ]}
    />
  </RootLayoutCommon>
)

export {
  RootLayout as default,
}