'use client'

import React, { useRef, useState }  from 'react'
import { Input } from '@hanzo/ui/primitives'

const AccessCodeInput = () => {
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef<HTMLInputElement>(null)

  const focus = (inputRef: React.MutableRefObject<HTMLInputElement | null>) => {
    setErr(false)
    if (inputRef.current) {
      inputRef.current.focus()
      selectAll(inputRef)
    }
  }

  const selectAll = (inputRef: React.MutableRefObject<HTMLInputElement | null>) => {
    if (inputRef.current) {
      inputRef.current.select()
    }
  }

  const checkAccessCode = () => {
    setErr(false)
    setLoading(true)
    setTimeout(() => {
      setErr(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className='flex flex-col gap-2 mx-auto w-full text-center items-center'>
      <div className='flex gap-1 w-40 text-foreground text-center'>
        <Input autoFocus maxLength={1} onInput={() => focus(input2Ref)} onClick={() => selectAll(input1Ref)} ref={input1Ref} className='border-muted-5' disabled={loading} />
        <Input maxLength={1} onInput={() => focus(input3Ref)} onClick={() => selectAll(input2Ref)} ref={input2Ref} className='border-muted-5' disabled={loading} />
        <Input maxLength={1} onInput={() => focus(input4Ref)} onClick={() => selectAll(input3Ref)} ref={input3Ref} className='border-muted-5' disabled={loading} />
        <Input maxLength={1} onInput={() => checkAccessCode()} onClick={() => selectAll(input4Ref)} ref={input4Ref} className='border-muted-5' disabled={loading} />
      </div>
      {loading && <p>Checking access code...</p>}
      {err && <p className='text-destructive'>Invalid access code!</p>}
    </div>
  )
}

export default AccessCodeInput
