import type { ButtonModalDef } from '@hanzo/ui/types'
import { ContactDialog } from '@luxfi/ui'
import saveToWaitlist from '@luxfi/ui/server-actions'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to get access to Lux Key.',
  action: saveToWaitlist,
  actionEnclosure: {
    dbId: 'lux-waitlist',
    listId: 'key',
    reply: "You're on the Lux Waitlist."
  }
} satisfies ButtonModalDef
