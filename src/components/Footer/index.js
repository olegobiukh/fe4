import React from "react";
import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__info">
          <p className="footer__box">
            <span className="footer__name">Mobile:</span>
            <span className="footer__subname">+38099-53-13-954</span>
          </p>
          <p className="footer__box">
            <span className="footer__name">Email:</span>
            <span className="footer__subname">oleg.obiukh@gmail.com</span>
          </p>
          <p className="footer__box">
            <span className="footer__name">Skype</span>
            <span className="footer__subname">OlegObiukh</span>
          </p>
        </div>
        <span className="footer__logo">&lt;/&gt;</span>
      </div>
    </footer>
  );
}

export default Footer;
