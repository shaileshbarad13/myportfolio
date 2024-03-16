import React from "react";
import AboutImg from "../../assets/IMG-20230226-WA0000.jpg";
import Info from "./info";
import "./about.css";
import cv from "../../files/CV_SHAILESH_REACT_JS.pdf";
const About = () => {
  const onButtonClick = () => {
    fetch(cv).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_SHAILESH_REACT_JS.pdf";
        alink.click();
      });
    });
  };
//   const onButtonClick = () => {
     
//     // using Java Script method to get PDF file
//     fetch("SamplePDF.pdf").then((response) => {
//         response.blob().then((blob) => {
         
//             // Creating new object of PDF file
//             const fileURL =
//                 window.URL.createObjectURL(blob);
                 
//             // Setting various property values
//             let alink = document.createElement("a");
//             alink.href = fileURL;
//             alink.download = "SamplePDF.pdf";
//             alink.click();
//         });
//     });
// };
  
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="myIMG" className="about_img" />

        <div className="about_data">
          <Info />

          <p className="about_description">
            As a front-end developer with a passion for creating beautiful and
            intuitive user experiences, I have honed my skills in HTML, CSS, and
            JavaScript. However, my ambition is to become a full-stack
            developer, and I am constantly expanding my skill set to include
            technologies such as React.js, Node.js, and Express.js,MongoDb.
          </p>

          <a
            onClick={() => onButtonClick()}
            className="button button-flex"
            style={{ gap: "10px" }}
          >
            <i class="ri-download-2-line"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
