'use client'

import React, { useEffect, useState }  from 'react'
import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'

import siteDef from '../siteDef'
import { ScreenfulBlockComponent as Screenful, type EnhHeadingBlock, type ScreenfulBlock, type ElementBlock, type SpaceBlock, type Block } from '@hanzo/ui/blocks'
import AccessCodeInput from '@/components/AccessCodeInput'
import {observer} from 'mobx-react'
import { auth } from '@/service/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const LandingPage = observer(() => {
  const [content, setContent] = useState<Block[]>([
    {blockType: 'enh-heading',
      specifiers: 'byline-center',
      heading: { text: 'Welcome to Lux Network Safe.', mb: 6 },
      byline: { text: 'The most trusted decentralized asset management and finance protocol.' },
    } as EnhHeadingBlock
  ])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setContent([
          {blockType: 'enh-heading',
            specifiers: 'byline-center',
            heading: { text: 'Welcome to Lux Network Safe.', mb: 6 },
            byline: { text: 'The most trusted decentralized asset management and finance protocol.' },
          } as EnhHeadingBlock,
          {blockType: 'space', level: 1} as SpaceBlock,
          {blockType: 'enh-heading',
            specifiers: 'center',
            heading: { text: 'Enter your access code', level: 5 },
          } as EnhHeadingBlock,
          {blockType: 'element', element: <AccessCodeInput/>} as ElementBlock
        ])
      }
    })

    return () => unsubscribe();
  }, [auth])

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
})
export default LandingPage
