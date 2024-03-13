'use client'
import React from 'react'

import { X } from 'lucide-react'

import { Button, Card } from '@hanzo/ui/primitives'

import LuxLogo from './icons/lux-logo'

const ChatWidget: React.FC<{
  title: string,
  chatbotUrl: string,
  subtitle?: string,
  question?: string,
  /* 
    Currently supports these icons from remix icons (https://remixicon.com/):
      GlobalLineIcon,
      ShieldFlashLineIcon,
      BankCardLineIcon,
      GroupLineIcon,
      QuestionnaireLineIcon
  */
  suggestedQuestions?: { heading: string, message: string, icon?: string }[]
}> = ({
  title,
  chatbotUrl,
  subtitle,
  question,
  suggestedQuestions
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
      'fixed bottom-0 sm:bottom-20 right-0 w-full h-full ' +
      'sm:max-w-[400px] sm:max-h-[550px] sm:px-4 z-[1002] ' +
      (showChatbot ? 'flex' : 'hidden')
    }>
      <Card className='flex flex-col h-full w-full'>
        <div className='flex px-4 py-2 h-12 bg-level-0 items-center justify-between'>
          <h3 className='font-semibold font-heading'>{title} <span className='opacity-60'>{subtitle}</span></h3>
          <Button onClick={onClick} variant='link' size='icon' className='w-fit sm:hidden'>
            <X />
          </Button>
        </div>
        <iframe src={iframeSrc} className='h-full' />
      </Card>
    </div>

    <Button
      variant='outline'
      size='link'
      onClick={onClick}
      className='fixed bottom-4 right-0 h-12 w-12 mx-4 rounded-full z-[1001]'
    >
      {showChatbot ? <X /> : <LuxLogo width={24} height={24} className='mt-2' />}
    </Button>
  </>)
}

export default ChatWidget
