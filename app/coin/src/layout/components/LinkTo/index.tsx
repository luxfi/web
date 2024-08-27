import type { FC } from "react";

export interface LinkToProps {
  title: string;
  link: string;
}

export const LinkTo: FC<LinkToProps> = (props) => {
  const { title, link } = props;

  return (
    <div className="flex flex-row gap-2">
      <a href={link} target="_blank" className="text-white text-base lg:text-[24px] 2xl:text-[32px]">{title}</a>
      <img src="assets/common/linkto.svg" alt="linkto" />
    </div>
  )
};