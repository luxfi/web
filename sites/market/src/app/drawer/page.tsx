'use client'
import React from 'react'

import {
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@hanzo/ui/primitives'

import { Header, Main } from '@luxfi/core'

import siteDef from '@/conf/site-def'

import AddPanel from './_page/add-panel' 
import BuyPanel from './_page/buy-panel' 

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
        
  return (<>
    <Header siteDef={siteDef}/>
    <Main>
      <Tabs defaultValue='buy' className='w-full sm:w-[500px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='buy'>Buy</TabsTrigger>
          <TabsTrigger value='add'>Add</TabsTrigger>
        </TabsList>
        <TabsContent value='buy'>
          <BuyPanel />  
        </TabsContent>
        <TabsContent value='add'>
          <AddPanel clx=''/>  
        </TabsContent>
      </Tabs>
    </Main>
  </>)
}

export default Page