import React from "react";

import avatar from "../images/avatar.png";

function About() {
  return (
    <section className="About" id="about">
      <h1 className="About__title">about</h1>

      <div className="About__container container">
        <div className="About__box About__box-left">
          <h2 className="About__subtitle">Goals</h2>
          <p className="About__text">
            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur
            leo, pede nec phasellus praesent adipiscing. Nullam diam magna at
            mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit,
            proin id turpis, vehicula amet nullam convallis adipiscing ut sit,
            sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan
            eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus
            nascetur id ut, integer ut dignissim harum.
          </p>
        </div>
        <div className="About__box-img">
          <img src={avatar} alt="user" />
        </div>
        <div className="About__box">
          <h2 className="About__subtitle">Dreams</h2>
          <p className="About__text">
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
