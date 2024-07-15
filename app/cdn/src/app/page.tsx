'use client'

import React  from 'react'
import { observer } from 'mobx-react-lite'

import { ApplyTypography } from '@hanzo/ui/primitives'

import siteDef from '../site-def'
import { useRouter } from 'next/navigation'

const Home = observer(() => {
  const router = useRouter()
  router.push(`https://lux.network`)
  return (<></>)
})

export default Home
