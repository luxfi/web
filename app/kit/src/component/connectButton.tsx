"use client";

import { useContext } from "react";
import { LuxkitContext } from "./luxkit";
import { useAccount, useDisconnect } from "wagmi";
import Image from "next/image";
import clsx from "clsx";
export const ConnectButton = () => {
  const kit = useContext(LuxkitContext);
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <button
      className={clsx(
        "py-[13px]",
        isConnected ? "px-[15px] bg-[#000000] border border-[#fff]  text-white" : "px-[18px] bg-[#fff]  text-black",
        "hover:shadow-button-hover",
        "h-10 relative  rounded-[50px] flex gap-[6px] items-center justify-center text-center text-base font-[600]"
      )}
      onClick={() => {
        if (!isConnected) {
          kit.open();
        } else {
          disconnect();
        }
      }}
    >
      <span>
        {isConnected
          ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
          : "Connect Wallet"}
      </span>
      {isConnected && (
        <Image src={"/exit.svg"} width="20" height="20" alt={"disconnect"} />
      )}
    </button>
  );
};
