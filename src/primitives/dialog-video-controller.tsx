'use client'
import React, { useState } from 'react'

import {type DialogProps} from '@/content/types/link-item-def'

const DialogVideoController: React.FC<{
  renderDialog: (props: Omit<DialogProps, 'trigger' | 'title' | 'byline' /* | 'onSubmit' */>) => React.ReactNode
}> = ({
  renderDialog,
}) => {

  const [open, setOpen] = useState<boolean>(false)

  const onOpenChange = (b: boolean) => {
    setOpen(b)
    console.log("OPEN: " + b)
    const videos = document.getElementsByTagName('video')
    const videoArray = Array.from(videos)
    videoArray.forEach((v) => {
      if (b) {
        v.pause()
      }
      else {
        v.play()
      }
    }) 
  }

  return renderDialog({
    open,
    onOpenChange
  }) as JSX.Element
}

export {
  DialogVideoController as default,
  type DialogProps
} 
