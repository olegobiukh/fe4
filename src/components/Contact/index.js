import React from "react";
import "./index.scss";

import Form from "./Form";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">contact</h2>
      <div className="contact__container container">
        <div className="contact__info">
          <div className="contact__box">
            <p className="contact__name">Phone number:</p>
            <p className="contact__subname">+38066-66-66-666</p>
          </div>
          <div className="contact__box">
            <p className="contact__name">Email:</p>
            <p className="contact__subname">mail@gmail.com</p>
          </div>
          <div className="contact__box">
            <p className="contact__name">Skype</p>
            <p className="contact__subname">mySkypeAcc</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
