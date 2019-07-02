import React from "react";

import "./index.scss";

function Skills({ data }) {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">skills</h2>
      <div className="skills__wrapper container">
        {data.map(item => (
          <div key={item.name} className="skill container">
            <div className="skill__name">{item.name}</div>
            <div className="skill__level container">
              {Array(10)
                .fill("")
                .map((dot, i) => {
                  if (item.level > i) {
                    return (
                      <div key={i} className="skill__dot skill__dot-dark" />
                    );
                  }

                  return <div key={i} className="skill__dot skill__dot-grey" />;
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
