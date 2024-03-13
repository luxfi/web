'use client'

import { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@hanzo/ui/primitives'

const AccessCodeInput = () => {
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)

  const checkAccessCode = (code: string) => {
    setErr(false)
    if (code.length === 6) {
      setLoading(true)
      setTimeout(() => {
        setErr(true)
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div className='flex flex-col gap-2 mx-auto w-full text-center items-center'>
      <InputOTP
        className='mx-auto'
        maxLength={6}
        onInput={(event) => checkAccessCode((event.target as HTMLInputElement).value)}
        render={({ slots }) => (
          <>
            <InputOTPGroup>
              {slots.slice(0, 3).map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}{" "}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {slots.slice(3).map((slot, index) => (
                <InputOTPSlot key={index + 3} {...slot} />
              ))}
            </InputOTPGroup>
          </>
        )}
      />
      <p className='h-[3rem]'>
        {loading ? 'Checking access code...' : err ? <span className='text-destructive'>Invalid access code!</span> : null}
      </p>
    </div>
  )
}

export default AccessCodeInput
