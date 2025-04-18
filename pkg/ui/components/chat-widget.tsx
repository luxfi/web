'use client'
import React from 'react'

import { Button, Card } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { LuxLogo } from './icons'
import type { ChatbotSuggestedQuestion } from '../types'

const ChatWidget: React.FC<{
  title: string
  chatbotUrl: string
  subtitle?: string
  question?: string
  buttonClx?: string
  /* 
    ChatBotSuggestQuestion.icon
    Currently supports these icons from remix icons (https://remixicon.com/):
      GlobalLineIcon,
      ShieldFlashLineIcon,
      BankCardLineIcon,
      GroupLineIcon,
      QuestionnaireLineIcon
  */
  suggestedQuestions?: ChatbotSuggestedQuestion[]
}> = ({
  title,
  chatbotUrl,
  subtitle,
  question,
  suggestedQuestions,
  buttonClx=''
}) => {

  const [showChatbot, setShowChatbot] = React.useState<boolean>(false)

  const onClick = () => { setShowChatbot(!showChatbot) }

  const searchParams = new URLSearchParams()
  if (question) {
    searchParams.append('question', question)
  }
  if (suggestedQuestions) {
    searchParams.append('sQuestions', suggestedQuestions.map(({ message }) => message).join(','))
    searchParams.append('sHeadings', suggestedQuestions.map(({ heading }) => heading).join(','))
    searchParams.append('sIcons', suggestedQuestions.map(({ icon }) => icon).join(','))
  }

  const iframeSrc = `${chatbotUrl}?${searchParams.toString()}`

  return (<>
    <div className={
      'fixed bottom-0 sm:bottom-16 right-0 w-full h-full ' +
      'sm:max-w-[400px] sm:max-h-[550px] sm:px-4 z-floating ' +
      (showChatbot ? 'flex' : 'hidden')
    }>
      <Card className='flex flex-col h-full w-full'>
        <div className='flex px-4 py-2 h-12 bg-level-0 items-center justify-between'>
          <h1 className='font-semibold font-heading'>{title} <span className='opacity-60'>{subtitle}</span></h1>
          <Button onClick={onClick} variant='link' size='icon' className='w-fit sm:hidden'>
            <LuxLogo width={24} height={24}/>
          </Button>
        </div>
        <iframe src={iframeSrc} className='h-full' />
      </Card>
    </div>

    <LuxLogo
      width={28}
      height={28}
      onClick={onClick}
      className={cn(
          // z-index should be below anything in commerce-iu (buy drawer and checkout widget)
        'fixed bottom-5 right-[24px] md:z-floating z-16 cursor-pointer',
        'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,1)]',
        'transition-transform', 
        showChatbot ? 'rotate-180' : '',
        buttonClx
      )}
      strokeWidth={1}
    />
  </>)
}

export default ChatWidget
