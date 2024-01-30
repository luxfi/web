import { ContactDialog } from '@luxdefi/ui/common'
import saveToListAction from '@/server-actions/save-to-waitlist'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to get access to LUX Credit.',
  action: saveToListAction,
  actionEnclusure: {
    listId: 33211417,
    reply: "You're on the LUX Credit Whitelist. Join the official LUX telegram to access thedrop. https://t.me/luxdefichat"
  }
}
