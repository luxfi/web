'use client'

import React, {useState} from 'react'
import saveToWaitlist from '@luxfi/ui/server-actions'
import ShareDialog from "@/components/share-dialog";
import {ContactDialog} from "@luxfi/ui";



const TopButtons = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between w-full max-w-[680px]'>
      <div>
        <ShareDialog link={{name: "LUX", url: "", icon: ""}} showButton={true} />
      </div>
      <div>
        <ContactDialog
          open={open}
          onOpenChange={setOpen}
          title="Subscribe for updates"
          buttonText="Subscribe"
          byline="Stay up to date with everything important."
          action={saveToWaitlist}
          buttonProps={{className: 'bg-primary !text-black rounded-lg'}}
          actionEnclosure={{
            dbId: 'lux-waitlist',
            listId: 'coin',
            reply: "You're on the list."
          }}
        />
      </div>
    </div>
  )
}

export default TopButtons
