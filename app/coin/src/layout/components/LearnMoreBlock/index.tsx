import type { FC } from "react";

export interface LearnMoreBlockProps {
  title: string;
  description: string;
  image: string;
}

export const LearnMoreBlock: FC<LearnMoreBlockProps> = (props) => {
  const { title, description, image } = props;

  return (
    <div className="lg:max-w-[300px] 2xl:max-w-[456px] flex-none">
      <img src={image} alt="title" className="w-full h-auto" />
      <h1 className="text-white text-[24px] 2xl:text-[32px] mt-8">{title}</h1>
      <p className="mt-[37px] text-grey text-base">{description}</p>
    </div>
  )
}