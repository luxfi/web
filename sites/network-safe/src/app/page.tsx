'use client'

import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'

import siteDef from '../siteDef'
import { ScreenfulBlockComponent as Screenful, type EnhHeadingBlock, type ScreenfulBlock, type ElementBlock, type SpaceBlock, type Block } from '@hanzo/ui/blocks'
import AccessCodeInput from '@/components/access-code-input'
import { useAuth } from '@hanzo/auth/service'

const Home = observer(() => {
  const auth = useAuth()
  const [content, setContent] = useState<Block[]>([
    {blockType: 'enh-heading',
      specifiers: 'byline-center center',
      heading: { text: 'Member login', mb: 6 },
      byline: { text: 'Please login to access this app. If you are an existing Lux member accessing this website for first time, please enter your invite code.' },
    } as EnhHeadingBlock
  ])

  useEffect(() => {
    if (auth.loggedIn) {
      setContent([
        {blockType: 'enh-heading',
          specifiers: 'byline-center center',
          heading: { text: 'Member login', mb: 6 },
          byline: { text: 'Please login to access this app. If you are an existing Lux member accessing this website for first time, please enter your invite code.' },
        } as EnhHeadingBlock,
        {blockType: 'space', level: 1} as SpaceBlock,
        {blockType: 'enh-heading',
          specifiers: 'center',
          heading: { text: 'Enter your invite code', level: 5 },
        } as EnhHeadingBlock,
        {blockType: 'element', element: <AccessCodeInput/>} as ElementBlock
      ])
    } else {
      setContent([
        {blockType: 'enh-heading',
          specifiers: 'byline-center center',
          heading: { text: 'Member login', mb: 6 },
          byline: { text: 'Please login to access this app. If you are an existing Lux member accessing this website for first time, please enter your invite code.' },
        } as EnhHeadingBlock
      ])
    }
  }, [auth.loggedIn])

  return (<>
    <Main className='md:flex-row md:gap-4 w-full max-w-[50rem]'>
      <Screenful
        block={{blockType: 'screenful',
          specifiers: 'center vert-center',
          contentColumns: [content]} as ScreenfulBlock} 
        className='mx-auto'
      />
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
})

export default Home
