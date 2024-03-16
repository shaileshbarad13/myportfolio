import React from "react";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i style={{ color: "#ff6600" }} class="ri-html5-fill"></i>

            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>

          <div className="skills_data">
            <i style={{ color: "#0099ff" }} class="ri-css3-fill"></i>

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i style={{ color: "#ffff00" }} class="ri-javascript-fill"></i>

            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i style={{ color: "#161414" }} class="ri-github-fill"></i>

            <div>
              <h3 className="skills_name">Git/GitHub</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i style={{ color: "#6AD3F3" }} class="ri-reactjs-fill"></i>

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>

          <div className="skills_data">
            <i style={{ color: "#8113F4" }} class="ri-bootstrap-fill"></i>

            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Frontend;
