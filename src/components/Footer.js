import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container container">
        <div className="Footer__info">
          <p className="Footer__box">
            <span className="Footer__name">Mobile:</span>
            <span className="Footer__subname">+38066-66-66-666</span>
          </p>
          <p className="Footer__box">
            <span className="Footer__name">Email:</span>
            <span className="Footer__subname">mail@gmail.com</span>
          </p>
          <p className="Footer__box">
            <span className="Footer__name">Skype</span>
            <span className="Footer__subname">mySkypeAcc</span>
          </p>
        </div>
        <span className="Footer__logo">&lt;/&gt;</span>
      </div>
    </footer>
  );
}

export default Footer;
