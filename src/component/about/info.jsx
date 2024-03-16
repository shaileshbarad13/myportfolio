import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>
        <h3 className="about_title">Experiences</h3>
        <span className="about_subtitle">1.5+ years </span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">3+ Projects</span>
      </div>

      <div className="about_box">
        <i class="bx bx-support about_icon"></i>
        <p>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24/7</span>
        </p>
      </div>
    </div>
  );
};

export default Info;
