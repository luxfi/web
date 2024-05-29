'use client'
import React, { useState, useEffect } from 'react'
import type SiteDef from '../../types/site-def'
import { ChatWidget, Header } from '../../components'

const Guts: React.FC<{
  children: React.ReactNode,
  siteDef: SiteDef,
  showHeader?: boolean,
  chatbot?: boolean
}> = ({
  children,
  siteDef,
  showHeader,
  chatbot
}) => {
    return (
      <>
        {showHeader && <Header
          siteDef={siteDef}
        />}
        {children}
      </>
    )
}

export default Guts
