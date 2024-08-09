import { NextRequest, NextResponse } from 'next/server'
import { getUserServerSide } from '@hanzo/auth/server'

// Create a 1x1 transparent GIF
// const transparentGIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')

export async function GET(request: NextRequest) {
    // Return the GIF as the response
    console.log('request: ', "------------------------------------------------------")
    const response = await getUserServerSide()
    console.log(response?.email)

    return NextResponse.json({ email: response?.email }, { status: 200 })
}
