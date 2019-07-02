import React from "react";

import "./index.scss";
import avatar from "./avatar.png";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="about__title">about</h1>

      <div className="about__container container">
        <div className="about__box about__box-left">
          <h2 className="about__subtitle">Goals</h2>
          <p className="about__text">
            My goal is to increase my proficiency in the skills I currently
            have, learn new and gain experience in order to become an
            outstanding in what I do and provide great service to my clients and
            their customers. Also, have a huge desire to master JavaScript and
            React.js, because I love to use these technologies.
          </p>
        </div>
        <div className="about__box-img">
          <img src={avatar} alt="user" />
        </div>
        <div className="about__box">
          <h2 className="about__subtitle">Dreams</h2>
          <p className="about__text">
            My dream is to make web more comfortable place for customer use. I
            know some people, who make quality product and sure, there is not a
            few of them. I wanna help them to sell their product by making web
            applications, which will be as connections between a service
            provider and customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
