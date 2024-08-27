import type { FC } from "react";

export interface FaqItemProp {
  title: string;
  link: string;
}

export const FaqItem: FC<FaqItemProp> = (props) => {
  const { title, link } = props;
  return (
    <div className="flex flex-row gap-4 w-[372px]">
      <a href={link} className="text-white text--[20px]">{title}</a>
      <img src="assets/common/left.svg" alt="left" />
    </div>
  )
}