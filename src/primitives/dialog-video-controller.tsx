'use client'

import React, { PropsWithChildren, useState } from 'react'

const DialogVideoController: React.FC<PropsWithChildren> = ({
  children,
}) => {

  const [open, setOpen] = useState<boolean>(false)

  const onOpenChange = (b: boolean) => {
    setOpen(b)
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

    // https://stackoverflow.com/a/49052730/11645689
  const updatedChildren = React.Children.map(
    children,
    (child) => (React.cloneElement(
      child as any, { open, onOpenChange }
    ))
  )

  return (<>
    {updatedChildren}
  </>)
}

export default DialogVideoController
