import React from "react";

import Form from "./Form";

function Contact() {
  return (
    <section className="Contact" id="contact">
      <h2 className="Contact__title">Contact</h2>
      <div className="Contact__container container">
        <div className="Contact__info">
          <div className="Contact__box">
            <p className="Contact__name">Phone number:</p>
            <p className="Contact__subname">+38066-66-66-666</p>
          </div>
          <div className="Contact__box">
            <p className="Contact__name">Email:</p>
            <p className="Contact__subname">mail@gmail.com</p>
          </div>
          <div className="Contact__box">
            <p className="Contact__name">Skype</p>
            <p className="Contact__subname">mySkypeAcc</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
