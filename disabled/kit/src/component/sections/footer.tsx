import clsx from "clsx";
import { LogoName } from "../logo";

export const Footer = () => {
  return (
    <div
      className={clsx(
        "w-full bg-[#050505] flex items-center justify-center",
        "h-[100px]",
        "lg:h-28"
      )}
    >
      <div
        className={clsx(
          "flex w-full max-w-[960px] ",
          "flex-col items-center ",
          "lg:flex-row lg:items-center lg:justify-between "
        )}
      >
        <LogoName name="Lux Wallet" />
        <div
          className={clsx(
            "flex  text-opacity-60 text-white text-sm font-medium ",
            "flex-row-reverse gap-[8px]",
            "lg:flex-col lg:items-end lg:gap-[auto]"
          )}
        >
          <div className="flex items-center gap-[2px] lg:gap-2 whitespace-nowrap">
            <a
              className="text-white text-sm font-bold"
              href="https://github.com/luxfi"
              target="_blank"
              rel="noreferrer"
            >
              Brand
            </a>
            <div>-</div>
            <a
              className="text-white text-sm font-bold"
              href="https://luxwallet-xyz.vercel.app/docs/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-[12px] whitespace-nowrap">
            © 2024 Lux Partners Limited. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
