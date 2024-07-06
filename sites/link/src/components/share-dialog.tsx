'use client'

import React from 'react'
import { type ILink } from "@/links";
import * as Icons from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Button
} from '@hanzo/ui/primitives'
import ShareItem from "@/components/share-item";
import SVG_SHARE_EMAIL from "../../public/assets/social/shareEmail.svg";
import SVG_SHARE_MESSANGER from "../../public/assets/social/shareMessenger.svg";
import SVG_SHARE_X from "../../public/assets/social/shareX.svg";
import SVG_SHARE_WHATSAPP from "../../public/assets/social/shareWhatsApp.svg";
import SVG_SHARE_LINKEDIN from "../../public/assets/social/shareLinkedIn.svg";
import SVG_SHARE_FACEBOOK from "../../public/assets/social/shareFacebook.svg";
import SVG_SHARE_SNAPCHAT from "../../public/assets/social/shareSnapchat.svg";


const ShareDialog: React.FC<{
  link: ILink
  showButton?: boolean
}>  = ({
  link,
  showButton = false
}) => {

  const url = () => {
    if (typeof window === 'undefined') return '';
    return window?.location.href.split('?')[0] + (showButton ? '' : link.name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {showButton ? (
          <Button className='bg-primary rounded-full h-[49px] w-[49px] items-center'>
            <Icons.Share2 className='text-black'/>
          </Button>
        ) : (
          <Icons.Share2 className='text-white hover:bg-secondary-0 p-1 rounded'/>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 bg-background border">
        <DialogHeader className='py-6 text-foreground'>
          <DialogTitle className='text-xl text-center text-inherit'>Share this link</DialogTitle>
        </DialogHeader>
        <div className='px-8 pb-8 rounded-e-lg flex flex-col justify-start items-center gap-4'>
          <ShareItem
            link={`snapchat://creativeKitWeb/camera/1?attachmentUrl=${url()}`}
            title="Share on Snapchat"
            icon={<SVG_SHARE_SNAPCHAT height={30}/>}
          />
          <ShareItem
            link={`https://www.facebook.com/sharer.php?u=${url()}`}
            title="Share on Facebook"
            icon={<SVG_SHARE_FACEBOOK height={30}/>}
          />
          <ShareItem
            link={`https://www.linkedin.com/sharing/share-offsite/?url=${url()}`}
            title="Share on LinkedIn"
            icon={<SVG_SHARE_LINKEDIN height={30}/>}
          />
          <ShareItem
            link={`https://x.com/intent/tweet?text=${link.name}%20-%20${url()}`}
            title="Share on X"
            icon={<SVG_SHARE_X height={30}/>}
          />
          <ShareItem
            link={`https://www.messenger.com/new`}
            title="Share via Messenger"
            icon={<SVG_SHARE_MESSANGER height={30}/>}
          />
          <ShareItem
            link={`https://wa.me/?text=${link.name}%20-%20${url()}`}
            title="Share via WhatsApp"
            icon={<SVG_SHARE_WHATSAPP height={30}/>}
          />
          <ShareItem
            link={`mailto:?subject=Check out this Lux project! &body=${link.name}%20-%20${url()}`}
            title="Share via Email"
            icon={<SVG_SHARE_EMAIL height={30}/>}
          />

          <div className='flex gap-4 w-full mt-2'>
            <Input
              id="link"
              defaultValue={url()}
              readOnly
            />
            <Button onClick={() => {navigator.clipboard.writeText(url())}}>
              <Icons.Copy className='text-black'/>
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ShareDialog
