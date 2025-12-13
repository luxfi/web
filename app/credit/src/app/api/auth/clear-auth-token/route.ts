import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// Create a 1x1 transparent GIF
const transparentGIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')

export async function GET(request: NextRequest) {
  // Return the GIF as the response
  const response = new NextResponse(transparentGIF)
  
  // Set response headers
  response.headers.set('Content-Type', 'image/gif')
  response.headers.set('Content-Length', transparentGIF.length.toString())
  response.headers.set('Cache-Control', 'no-store, max-age=0')

  // Clear the auth token cookie
  // TODO: Fix cookie deletion - TypeScript type issue
  // (cookies() as any).delete('auth-token')

  return response
}
