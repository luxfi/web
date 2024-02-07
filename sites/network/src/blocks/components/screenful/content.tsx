import React from 'react'

import { type Block, ContentComponent } from '@luxdefi/ui/blocks'
import { containsToken, cn } from '@luxdefi/ui/util'

import type ScreenfulBlock from '@/blocks/def/screenful'


const ContentColumn: React.FC<{
  blocks: Block[]
  specifiers?: string
  agent?: string
  className?: string
}> = ({
  blocks,
  specifiers,
  agent,
  className=''
}) => {

  const specified = (s: string) => (containsToken(specifiers, s))

  let modifiers = ''

  if (agent !== 'phone') {
    if (specified('right')) {
      modifiers += 'items-end ' 
      
    }
    else if (specified('center')) {
      modifiers += 'items-center '
    }
    // default to left
    else {
      modifiers += 'items-start '
    } 
  }
    // default to left
  else {
    modifiers += 'items-start '
  } 

  if (agent !== 'phone') {
    if (specified('bottom')) {
      modifiers += 'justify-end ' 
    }
      // default to top 
    else {
      modifiers += 'justify-start ' 
    } 
    // right aligned text looks shitty on mobile 
    if (specified('text-align-right')) {
      modifiers += 'text-right '  
    }
    else {
      modifiers += 'text-left '  
    }
  }
  else {
    modifiers += 'justify-start ' 
  }

  if (agent === 'phone' && specified('mobile-center-headings')) {
    modifiers += 'typography-headings:text-center '  
  }

  return (
    <div className={cn('flex flex-col justify-center ' + modifiers, className)} >
      <ContentComponent blocks={blocks} agent={agent} />
    </div>
  )
}  

const Content: React.FC<{
  block: ScreenfulBlock
  agent?: string
  className?: string
}> = ({
  block: b,
  agent,
  className=''
}) => {

  const specified = (s: string) => (containsToken(b.specifiers, s))
  const narrowGutters = specified('narrow-gutters') // eg, for a table object that is large

  let outerClasses =  (narrowGutters ? 
      // 44 + 24 = 68, 80 + 32 = 104
    'px-6 lg:px-8 2xl:px-2 pb-6 pt-[68px] md:pt-[104px] lg:pt-[112px] ' 
    : 
    'px-[8vw] 2xl:px-[2vw] pb-[8vh] pt-[calc(44px+8vh)] md:pt-[calc(80px+8vh)] ') 
    // + 'border border-accent ' // debug
    + ' overflow-y-hidden' // safety valve

  let moreModifiers = ''
    // 40px + 32px
  if (agent && agent !== 'desktop') {
    moreModifiers += 'pt-[72px] pb-0 px-4 ' 
  }

  const multiColumnLayoutClx = (agent === 'phone') ? 
    'flex flex-col gap-6'
    :
    `grid grid-cols-${b.contentColumns.length} gap-6`

  return  b.contentColumns.length == 1 ? (
    <ContentColumn 
      blocks={b.contentColumns[0]} 
      specifiers={b.columnSpecifiers?.[0]} 
      agent={agent} 
      className={cn(outerClasses, moreModifiers, className)}
    />
  ) : (
    <div className={cn(multiColumnLayoutClx, outerClasses, moreModifiers, className)}>
    {b.contentColumns.map((column, index) => (
      <ContentColumn 
        blocks={column} 
        specifiers={b.columnSpecifiers?.[index]} 
        agent={agent} 
        className=''
        key={index}
      />
    ))}  
    </div>
  )
}

export default Content