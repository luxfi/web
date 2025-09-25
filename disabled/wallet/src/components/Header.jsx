/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import { showToast } from "../toast";
import AnimateScroll from "./AnimateScroll";
import { Download } from "./Download/Download";
import { ga } from "../ga";

const Header = ({ chains }) => {
  const [isExpand, setIsExpand] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [mouseOver, setMouseOver] = useState("");
  const isFirefox = /firefox/i.test(navigator.userAgent);
  const isBrave = /brave/i.test(navigator.userAgent);
  const isEdge = /edg\//i.test(navigator.userAgent);
  const isChrome = !isBrave && !isEdge && /chrome/i.test(navigator.userAgent);

  const initMouseOver = useCallback(() => {
    if (isChrome) setMouseOver("chrome");
    if (isEdge) setMouseOver("edge");
    if (isBrave) setMouseOver("brave");
    if (isFirefox) setMouseOver("firefox");
  }, [isBrave, isChrome, isEdge, isFirefox]);

  const handleClickMenuBtn = () => {
    setIsExpand(!isExpand);
  };

  const reportClickDownload = (label) => {
    ga.event({
      category: "User",
      action: "clickDownload",
      label,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleClickDownloadBtn = (e) => {
    if (/mobile/i.test(navigator.userAgent)) {
      e.preventDefault();
      showToast({
        content: "Please visit this site from the desktop",
        duration: 2000,
      });
    }
    reportClickDownload();
  };

  useEffect(() => {
    initMouseOver();
  }, [initMouseOver]);

  return (
    <header>
      <div className="nav">
        <img src="/assets/images/logo-white.webp" width={200} height={80} alt="Lux" className="logo" />
        <a
          href="javascript:;"
          className={clsx("menu-btn", {
            expand: isExpand,
          })}
          onClick={handleClickMenuBtn}
        >
          <i></i>
          <i></i>
          <i></i>
        </a>
        <ul className={clsx('menu', { show: isExpand })}>
        {/* <li>
            <a
              href="/chain-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              Chain Dashboard
            </a>
          </li> */}
          <li>
            <a
              href="https://luxkit.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              LuxKit
            </a>
          </li>
          <li>
            <a
              href="https://x.com/luxdefi"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/luxdefi"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a 
              href="https://instagram.com/luxdefi" 
              target="_blank" 
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/luxdefi"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luxfi/luxwallet.xyz"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:hi@lux.finance" target="_blank" rel="noreferrer">
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="header-content">
        <div className="left">
          <h1 className="white">
            The game-changing wallet for{" "}
            <AnimateScroll chains={chains}></AnimateScroll>
          </h1>
          <div className="container">
            <div className="features">
              <a
                href="https://github.com/luxfi/xwallet/blob/master/docs/SlowMist%20Audit%20Report%20-%20Lux%20Wallet-2023.07.20.pdf"
                target="_blank"
                className="feature-item"
                rel="noreferrer"
              >
                <img
                  src="/assets/images/slowmist.png"
                  alt="SlowMist"
                  className="icon"
                />
                Audited by SlowMist
              </a>
              <a
                href="https://github.com/luxfi/xwallet"
                target="_blank"
                className="feature-item"
                rel="noreferrer"
              >
                <img
                  src="/assets/images/github.png"
                  alt="Open Source"
                  className="icon"
                />
                Open Source
              </a>
            </div>

            <Download />
          </div>
          <img
            src="/assets/images/hero-16.png"
            alt="Dashboard screenshot"
            className="hero-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
