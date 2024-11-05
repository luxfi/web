import { BASE_PATH } from "@/constant";
import style from "./style.module.scss";

export const ExtensionPanel = () => {
  return (
    <>
      <div className={style.subTitle}>
        1. Download Lux Wallet browser extension{" "}
      </div>

      <a
        className={style.install}
        target="_blank"
        rel="noreferrer"
        href="https://chrome.google.com/webstore/detail/lux/acmacodkjbdgmoleebolmdjonilkdbch"
      >
        <img
          className={style.chromeIcon}
          src={`${BASE_PATH}/assets/lux-points/chrome.png`}
          alt={"Install Lux Wallet"}
        />
        <span>Install Lux Wallet</span>
      </a>

      <div className={style.subTitle}>
        2. Migrate your address and go to Lux Points
      </div>
      <img
        className={style.guide}
        src={`${BASE_PATH}/assets/lux-points/season2-guide-2.png`}
        alt=""
      />
    </>
  );
};
