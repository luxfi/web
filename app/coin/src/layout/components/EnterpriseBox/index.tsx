import type { FC } from "react";
import { Check, MoveRight } from "lucide-react";

export interface EnterpriseBoxLinkProps {
  label: string;
  link: string;
}

export interface EnterpriseBoxProps {
  title: string;
  description: string;
  links: EnterpriseBoxLinkProps[];
}

export const EnterpriseBox: FC<EnterpriseBoxProps> = (props) => {
  const { title, description, links } = props;

  return (
    <div className="max-w-[700px]">
      <h1 className="flex gap-[30px] flex-row justify-start items-center text-white text-[32px]">
        <Check />
        {title}
      </h1>
      <p className="pl-[40px] text-white text-[24px] mt-[10px]">{description}</p>
      <div className="pl-[40px] flex flex-wrap gap-10 mt-[15px]">
        {
          links.map((link, index) =>
            <a key={index} href={link.link} className="flex flex-row gap-2 text-[24px] underline items-center">
              {link.label}
              <MoveRight />
            </a>
          )
        }
      </div>
    </div>
  )
}