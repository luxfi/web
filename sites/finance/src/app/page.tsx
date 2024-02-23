'use client'

import React, { useEffect, useState } from 'react'
import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'

import siteDef from '../siteDef'
import { ScreenfulBlockComponent as Screenful, type EnhHeadingBlock, type ScreenfulBlock, type ElementBlock, type SpaceBlock, type Block } from '@hanzo/ui/blocks'
import AccessCodeInput from '@/components/access-code-input'
import { useCurrentUser } from '@hanzo/auth'

const Home = () => {
  const {user} = useCurrentUser()
  const [content, setContent] = useState<Block[]>([
    {blockType: 'enh-heading',
      specifiers: 'byline-center',
      heading: { text: 'Welcome to Lux Finance.', mb: 6 },
      byline: { text: 'The only quantum safe and private protocol for decentralized finance.' },
    } as EnhHeadingBlock
  ])

  useEffect(() => {
    if (user) {
      setContent([
        {blockType: 'enh-heading',
          specifiers: 'byline-center',
          heading: { text: 'Welcome to Lux Finance.', mb: 6 },
          byline: { text: 'The only quantum safe and private protocol for decentralized finance.' },
        } as EnhHeadingBlock,
        {blockType: 'space', level: 1} as SpaceBlock,
        {blockType: 'enh-heading',
          specifiers: 'center byline-center',
          heading: { text: `You are signed in as ${user.email}.`, level: 0 },
          byline: { text: 'Enter your access code', level: 4 },
      } as EnhHeadingBlock,
        {blockType: 'element', element: <AccessCodeInput/>} as ElementBlock
      ])
    }
  }, [user])

  return (<>
    <Main className='md:flex-row md:gap-4 w-full'>
      <Screenful
        block={{blockType: 'screenful',
          specifiers: 'center vert-center',
          contentColumns: [content]} as ScreenfulBlock} 
        className='mx-auto'
      />
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Home
