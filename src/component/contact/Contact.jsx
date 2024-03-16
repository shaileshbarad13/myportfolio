import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const notify = (msg) => toast(msg);

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_si8ssxo",
      "template_xzh1wgh",
      form.current,
      "rmatSkapQ_ehTFMT2"
    );
    notify("Email sent!");
    e.target.reset();
  };

  return (
    <section className="contact_section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me </span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i
                className="bx bx-mail-send contact_card-icon"
                style={{ color: "#ff471a" }}
              ></i>

              <h3 className="contact_card-title">E-Mail</h3>
              <span className="contact_card-data">
                baradshailesh13@gmail.com
              </span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=baradshailesh13@gmail.com"
                target="_blank"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i
                className="uil uil-whatsapp contact_card-icon"
                style={{ color: "#68D85A" }}
              ></i>

              <h3 className="contact_card-title">WhatsApp</h3>
              <span className="contact_card-data">+91-7096961632</span>

              <a
                href="https://api.whatsapp.com/send?phone=9974097240&text=Hello, Shailesh!"
                target="_blank"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i
                className="uil uil-calling contact_card-icon"
                style={{ color: "#73ADCD" }}
              ></i>

              <h3 className="contact_card-title">Call to</h3>
              <span className="contact_card-data">+91-7096961632</span>

              <a
                href="tel:+917096961632"
                target="_blank"
                className="contact_button"
              >
                Call me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me a Message..</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name:</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Write your Name...."
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">E-mail:</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Write your E-mail...."
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message:</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your Message...."
              />
            </div>

            <button className="button button-flex" style={{ gap: "10px" }}>
              Send Message
              <i class="ri-send-plane-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
