import React  from 'react'
import _links, {type ILink, type ILinks} from "@/links";
import Link from "@/components/link";

export const links = { ..._links } as ILinks

const Links = () => (<>
  <div className='w-full'>
    {Object.keys(links).map((type) => (
      <div key={type}>
        {type !== 'General' && (
          <h2 className='mt-8'>{type}</h2>
        )}
        {/*@ts-ignore*/}
        {(links[type] as ILink[]).map((link: ILink) => (
          <Link key={link.name} link={link}/>
        ))}

      </div>
    ))}
  </div>
</>)

export default Links
