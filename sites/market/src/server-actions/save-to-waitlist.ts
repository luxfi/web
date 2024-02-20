'use server'
import type { ContactInfo } from '@hanzo/ui/types'

  // https://nextjs.org/docs/app/api-reference/functions/server-actions
  // https://github.com/orgs/react-hook-form/discussions/10757#discussioncomment-6672403
const saveToWaitlist = async (formData: ContactInfo, enc?: any) => {

  const { listId, reply } = enc!

  console.log("=== ON SERVER: saveToWaitlist called with... ===")
  console.log(JSON.stringify(formData, null, 2))
  if (enc) {
    console.log("=== with enclosure... ===")
    console.log(JSON.stringify(enc, null, 2))
  }
  else {
    console.log("=== with no enclosure. ===")
  }
}
    // see static-site's index.html sendFormDataToServerOnSubmit() on line ~46
    /* PLEASE SAVE

    We need a server-to-server version of this above.
    
 function sendFormDataToServerOnSubmit(form, listId, dynamic_text){
        form.addEventListener('submit', (e) => {
            let data = Array.from(new FormData(form));
            data.push({"list": listId, "text": dynamic_text});
            let res = fetch('https://bestcondos.co:5000/textmagic/create-contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => console.log(res));
        });
    }
    */



export default saveToWaitlist
