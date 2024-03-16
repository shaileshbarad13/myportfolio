import React from "react";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Shailesh Barad</h1>
      {/* <!--| --> */}
      <h3 className="home_subtitle">
        <ul className="dynamic-txt">
          <li>
            <span>Front-End Developer</span>
          </li>
          <li>
            <span>Aspiring Full Stack</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
          <li>
            <span>A Traveller</span>
          </li>
        </ul>
      </h3>
      <p className="home_description">
        As a front-end developer with a passion for creating beautiful and
        intuitive user experiences.
      </p>

      <a
        href="#contact"
        className="button button-flex "
        style={{ gap: "10px" }}
      >
        Say Hello
        <i class="ri-send-plane-fill"></i>
      </a>
    </div>
  );
};

export default Data;
