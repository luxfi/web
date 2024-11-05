import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="left">
          <div className="lux-logo">
            <img src="/assets/images/logo-white.webp" alt="lux" />
          </div>
        </div>
        <div className="right">
          <div className="footer-links">
            <a
              href="https://github.com/luxfi/logo"
              target="_blank"
              rel="noreferrer"
            >
              Brand
            </a>
            <a href="/docs/privacy/" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </div>
          <p className="copyright">© 2024 luxwallet.xyz All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
