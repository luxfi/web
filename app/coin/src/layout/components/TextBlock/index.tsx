import type { FC, ReactNode } from "react";

export interface TextBlockType {
  title: string;
  description: string;
  icon: string;
}

export const TextBlock: FC<TextBlockType> = (props) => {
  const { title, description, icon } = props;

  return (
    <div className="max-w-[440px] z-2">
      <div className="flex flex-row gap-3 justify-center">
        <img src={icon} alt={title} />
        <p className="text-white text-[24px] 2xl:text-[32px]">{title}</p>
      </div>
      <p className="mt-[45px] text-grey text-xl 2xl:text-2xl">{description}</p>
    </div>
  )
}