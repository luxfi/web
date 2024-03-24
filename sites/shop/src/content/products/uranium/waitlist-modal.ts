import { ContactDialog } from '@luxdefi/common'
import saveToListAction from '@/server-actions/save-to-waitlist'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to get access to Lux Uranium.',
  action: saveToListAction,
  actionEnclusure: {
    listId: 3198210,
    reply: "You're on the LUX Uranium Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
  }
}