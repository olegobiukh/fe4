import React from "react";

function Skills({ data }) {
  return (
    <section className="Skills" id="skills">
      <h2 className="Skills__title">skills</h2>
      <div className="Skills__wrapper container">
        {data.map(item => (
          <div key={item.name} className="Skill container">
            <div className="Skill__name">{item.name}</div>
            <div className="Skill__level container">
              {Array(10)
                .fill("")
                .map((dot, i) => {
                  if (item.level > i) {
                    return (
                      <div key={i} className="Skill__dot Skill__dot-dark" />
                    );
                  }

                  return <div key={i} className="Skill__dot Skill__dot-grey" />;
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
