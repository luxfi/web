import { NextResponse } from 'next/server'

// Temporarily disabled Firebase-dependent logout
// import { handleLogoutApiRequest } from '@hanzo/auth/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  // TODO: Restore Firebase logout when credentials are available
  // return handleLogoutApiRequest()
  return NextResponse.json({ success: true, message: 'Logout endpoint (Firebase disabled)' })
}
