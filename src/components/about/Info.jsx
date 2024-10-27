import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Interships Completed</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Personal and Club Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-trophy about__icon"></i>

        <h3 className="about__title">Hackathon</h3>
        <span className="about__subtitle">Finalist Hack4Good'22</span>
      </div>
    </div>
  );
};

export default Info;
