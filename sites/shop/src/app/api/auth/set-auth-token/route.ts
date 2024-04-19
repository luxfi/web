import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// Create a 1x1 transparent GIF
const transparentGIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  if (!!token) {
    cookies().set({
      name: 'auth-token',
      value: token,
      httpOnly: false,
      path: '/',
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    })
  }

  // Return the GIF as the response
  return NextResponse.json({
    statusCode: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': transparentGIF.length.toString(),
    },
    body: transparentGIF.toString('base64'),
    isBase64Encoded: true,
  })
}
