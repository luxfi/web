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
      heading: { text: 'For the real ones.', mb: 6 },
      byline: { text: 'Find and trade tokens, NFTs, and real world assets (RWAs)' },
    } as EnhHeadingBlock
  ])

  useEffect(() => {
    if (user) {
      setContent([
        {blockType: 'enh-heading',
          specifiers: 'byline-center',
          heading: { text: 'For the real ones.', mb: 6 },
          byline: { text: 'Find and trade tokens, NFTs, and real world assets (RWAs)' },
        } as EnhHeadingBlock,
        {blockType: 'space', level: 1} as SpaceBlock,
        {blockType: 'enh-heading',
          specifiers: 'center',
          heading: { text: 'Enter your access code', level: 5 },
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
