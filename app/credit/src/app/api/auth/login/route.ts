import { NextRequest, NextResponse } from 'next/server'

// Temporarily disabled Firebase-dependent login
// import { handleLoginApiRequest } from '@hanzo/auth/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  // TODO: Restore Firebase login when credentials are available
  // return handleLoginApiRequest(request)
  return NextResponse.json({ success: false, message: 'Login endpoint (Firebase disabled)' }, { status: 503 })
}
