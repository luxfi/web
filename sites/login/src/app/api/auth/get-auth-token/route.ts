import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const token = cookies().get('auth-token')
  const reqToken = request.cookies.get('auth-token')?.value

  return new Response(JSON.stringify({ token: token, reqToken: reqToken }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true', // Allow credentials
    },
  })
}
