'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { type Chat } from '@/lib/types'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || ''
})

export async function getChats(userId?: string | null) {
  if (!userId) {
    return []
  }

  try {
    const pipeline = redis.pipeline()
    const chats: string[] = await redis.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true
    })

    for (const chat of chats) {
      pipeline.hgetall(chat)
    }

    const results = await pipeline.exec()

    return results as Chat[]
  } catch (error) {
    return []
  }
}

export async function getChat(id: string) {
  const chat = await redis.hgetall<Chat>(`chat:${id}`)

  if (!chat) {
    return null
  }

  return chat
}

export async function clearChats(
  userId?: string
): Promise<{ error?: string }> {
  const chats: string[] = await redis.zrange(`user:chat:${userId}`, 0, -1)
  if (!chats.length) {
    return { error: 'No chats to clear' }
  }
  const pipeline = redis.pipeline()

  for (const chat of chats) {
    pipeline.del(chat)
    pipeline.zrem(`user:chat:${userId}`, chat)
  }

  await pipeline.exec()

  revalidatePath('/')
  redirect('/')
}

export async function saveChat(chat: Chat) {
  // if (chat.userId !== 'anonymous') {
  const pipeline = redis.pipeline()
  pipeline.hmset(`chat:${chat.id}`, chat)
  pipeline.zadd(`user:chat:${chat.userId}`, {
    score: Date.now(),
    member: `chat:${chat.id}`
  })
  await pipeline.exec()
  // }
}

export async function getSharedChat(id: string) {
  try {
    const chat = await redis.hgetall<Chat>(`chat:${id}`)

    if (!chat || !chat.sharePath) {
      return null
    }

    return chat
  } catch (error) {
    console.error('getSharedChat error:', error)
    return null
  }
}

export async function shareChat(id: string, userId: string = 'anonymous') {
  const chat = await redis.hgetall<Chat>(`chat:${id}`)

  if (!chat || chat.userId !== userId) {
    return null
  }

  const payload = {
    ...chat,
    sharePath: `/share/${id}`
  }

  await redis.hmset(`chat:${id}`, payload)

  return payload
}
