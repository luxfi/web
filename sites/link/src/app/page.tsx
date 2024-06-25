import React  from 'react'
import Image from 'next/image'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { Footer, Main } from "@luxfi/core";

import Links from "@/components/links";
import Socials from "@/components/socials";
import TopButtons from "@/components/top-buttons";

import './global.css'

import siteDef from '../site-def'

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}


const UniversalPage = ({ params, searchParams }: Props) => (<>
  <Main className='text-center mx-auto px-2'>
    <TopButtons />
    <Image src="/assets/lux-site-icons/logo.jpeg" height={100} width={100} alt="logo"/>
    <Image src="/assets/lux-site-icons/android-chrome-192x192.png" height={30} width={30} alt="logo"/>
    <ApplyTypography className='py-3 opacity-60'>
      <p>Network of blockchains designed for privacy and quantum security.</p>
    </ApplyTypography>
    <Links />
    <Socials />
  </Main>
  <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />

</>)

export default UniversalPage
