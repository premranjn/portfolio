import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/premranjn/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/premranjn"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        // href="https://dribbble.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-dribbble"></i>
      </a>

    </div>
  );
};

export default Social;
