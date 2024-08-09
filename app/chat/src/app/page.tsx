import { Chat } from '@/components/chat/chat'
import { nanoid } from 'ai'
import { AI } from './actions'
import { getCookie } from 'cookies-next'

import axios from 'axios'
export const maxDuration = 60

export default function Page() {
  const id = nanoid()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} />
    </AI>
  )
}
