import { ContactDialog } from '@luxdefi/elements'
import saveToListAction from '@/server-actions/save-to-waitlist'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to own LUX Coin',
  action: saveToListAction,
  actionEnclusure: {
    listId: 3211420,
    reply: "You're on the LUX Coin Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
  }
}