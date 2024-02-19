import React  from 'react'
import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'
import AuthUiComponent from '@hanzo/auth-widget/auth-ui-component'
import siteDef from '@/siteDef'
import { ScreenfulBlockComponent as Screenful, type ElementBlock, type ScreenfulBlock, type EnhHeadingBlock, type CTABlock, type SpaceBlock } from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'

const LoginPage = () => (<>
  <Main className='md:flex-row md:gap-4 '>
    <Screenful 
      block={{blockType: 'screenful', contentColumns: [[
        {blockType: 'element', element: <AuthUiComponent redirectUrl='/'/>} as ElementBlock,
        {blockType: 'space', level: 3} as SpaceBlock,
        {blockType: 'cta', elements: [{title: 'GET STARTED', href: '/', variant: 'primary'} as LinkDef]} as CTABlock
      ]]} as ScreenfulBlock} 
      className='w-full max-w-[30rem] mx-auto'
    />
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default LoginPage
