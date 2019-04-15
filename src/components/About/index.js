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
            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur
            leo, pede nec phasellus praesent adipiscing. Nullam diam magna at
            mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit,
            proin id turpis, vehicula amet nullam convallis adipiscing ut sit,
            sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan
            eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus
            nascetur id ut, integer ut dignissim harum.
          </p>
        </div>
        <div className="about__box-img">
          <img src={avatar} alt="user" />
        </div>
        <div className="about__box">
          <h2 className="about__subtitle">Dreams</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur
            leo, pede nec phasellus praesent adipiscing. Nullam diam magna at
            mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit,
            proin id turpis, vehicula amet nullam convallis adipiscing ut sit,
            sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan
            eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus
            nascetur id ut, integer ut dignissim harum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
