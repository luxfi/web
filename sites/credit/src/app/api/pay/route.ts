
import { NextRequest, NextResponse } from 'next/server'
import { Client, Environment } from 'square'
import { randomUUID } from 'crypto'

// https://developer.squareup.com/blog/online-payments-with-square-and-react/
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function() { return this.toString(); }

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox
})

export async function POST(request: NextRequest) {
  const { sourceId, amount } = await request.json()

  // Square API accepts amount in cents
  const amountInCents = amount * 100

  const { result } = await paymentsApi.createPayment({
    idempotencyKey: randomUUID(),
    sourceId: sourceId,
    amountMoney: {
      currency: 'USD',
      amount: BigInt(amountInCents)
    }
  })

  return NextResponse.json({ success: true, data: result })
}