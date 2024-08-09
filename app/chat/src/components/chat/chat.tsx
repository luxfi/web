'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'
import { useUIState, useAIState } from 'ai/rsc'

type ChatProps = {
  id?: string
} 

export function Chat({ id }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  const [messages] = useUIState()
  const [aiState] = useAIState()
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    let heightCheckInterval = setInterval(() => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    }, 100);
    return () => {
      clearInterval(heightCheckInterval);
    }
  }, []);

  useEffect(() => {
    if (!path.includes('search') && messages.length === 1) {
      window.history.replaceState({}, '', `/search/${id}`)
    }
  }, [id, path, messages])

  useEffect(() => {
    setAutoScroll(true);
  }, [messages]);

  useEffect(() => {
    if (aiState.messages[aiState.messages.length - 1]?.type === 'followup') {
      // router.refresh()
    }
  }, [aiState, router])

  useEffect(() => {
    if (autoScroll && scrollerRef.current) {
      scrollerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [containerHeight, autoScroll]);

  useEffect(() => {
    const handleScroll = () => {
      setAutoScroll(false)
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-[calc(100vh-80px)] mt-[80px] overflow-x-hidden pt-12 md:pt-14 pb-14 md:pb-24 w-full max-w-2xl mx-auto flex flex-col space-y-3 md:space-y-4 justify-center">
      <ChatMessages messages={messages} />
      <ChatPanel messages={messages} />
      <div ref={scrollerRef}></div>
    </div>
  )
}
