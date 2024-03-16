import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/shailesh-barad-a53a10151/"
        className="home_social-icon"
        target="_blank"
      >
        <i style={{ color: "#3870AB" }} class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=baradshailesh13@gmail.com"
        className="home_social-icon"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 141.7 141.7"
          viewBox="0 0 141.7 141.7"
          id="gmail"
        >
          <path
            fill="#4285f4"
            d="M24.3,111.3h17.2V69.6L16.9,51.3V104C16.9,108,20.2,111.3,24.3,111.3z"
          ></path>
          <path
            fill="#34a853"
            d="M100.3,111.3h17.2c4.1,0,7.4-3.3,7.4-7.4V51.3l-24.5,18.4V111.3z"
          ></path>
          <path
            fill="#fbbc04"
            d="M100.3,37.8v31.9l24.5-18.4v-9.8c0-9.1-10.4-14.3-17.7-8.8L100.3,37.8z"
          ></path>
          <path
            fill="#ea4335"
            fill-rule="evenodd"
            d="M41.4,69.6V37.8l29.4,22.1l29.4-22.1v31.9L70.9,91.7L41.4,69.6z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#c5221f"
            d="M16.9,41.4v9.8l24.5,18.4V37.8l-6.9-5.2C27.3,27.2,16.9,32.4,16.9,41.4z"
          ></path>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/_sb.ahir_/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil  uil-instagram"></i>
      </a>
      <a
        href="https://github.com/shaileshbarad13"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil  uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
