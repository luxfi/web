import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// Create a 1x1 transparent GIF
const transparentGIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')

export async function GET(request: NextRequest) {
  cookies().delete('auth-token')
  
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
