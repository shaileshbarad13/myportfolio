import React, { useState } from "react";
import "./education.css";

const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification_section" id="education">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={`qualification_button button-flex ${
              toggleState === 1 ? "active" : "deactive"
            }`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={`qualification_button button-flex ${
              toggleState === 2 ? "active" : "deactive"
            }`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div className="special"></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Bachelor of Computer Engineering
                </h3>
                <span className="qualification_subtitle">
                  B.H.Gardi College of Engineering & Technology - Rajkot
                </span>

                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i>
                  { " "} 2018-2021
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                Diploma in Computer Engineering
                </h3>
                <span className="qualification_subtitle">
                Darshan Institute of Engineering & Technology - Rajkot
                </span>

                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i>
                  { " "}  2015-2018
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div className="special"></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                 
                </h3>
                <span className="qualification_subtitle">
                 
                </span>

                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i>
                 
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div className="special"></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Junior Software Developer
                </h3>
                <span className="qualification_subtitle">
                  Softqubes Technologies - Ahmdabad
                </span>

                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i>
                  { " "}  Apr/2023 - present
                </div>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title"></h3>
                <span className="qualification_subtitle"></span>

                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                 
                </div>
              </div>
            </div> */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                ReactJs Developer
                </h3>
                <span className="qualification_subtitle">
                Techvoot Solutions
                </span>

                <div className="qualification_calender">
                  <i class="uil uil-calendar-alt"></i>
                  { " "}  2022-2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Figma</span>

                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
