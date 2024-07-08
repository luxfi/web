import SVG_Facebook from "../public/assets/social/facebook.svg";
import SVG_Instagram from "../public/assets/social/instagram.svg";
import SVG_X from "../public/assets/social/X.svg";
import SVG_LinkedIn from "../public/assets/social/linkedin.svg";
import SVG_Email from "../public/assets/social/email.svg";


export interface ISocialLink {
  url: string;
  name: string;
  icon: React.ReactNode;
}

export const socials =  [
    {
      url: "https://facebook.com/luxdefi",
      name: "Facebook",
      icon: <SVG_Facebook height={30}/>
    },
    {
      url: "https://instagram.com/luxdefi",
      name: "Instagram",
      icon: <SVG_Instagram height={30}/>
    },
    {
      url: "https://x.com/luxdefi",
      name: "X",
      icon: <SVG_X height={30}/>
    },
    {
      url: "https://linkedin.com/company/luxdefi",
      name: "LinkedIn",
      icon: <SVG_LinkedIn height={30}/>
    },
    {
      url: "mailto:hi@lux.finance",
      name: "Email",
      icon: <SVG_Email height={30}/>
    }
  ]
