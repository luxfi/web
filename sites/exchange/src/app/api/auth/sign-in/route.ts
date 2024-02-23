import { NextRequest } from 'next/server'

import { handleLogin } from '@hanzo/auth/server'

export async function POST(request: NextRequest) {
  return handleLogin(request)
}