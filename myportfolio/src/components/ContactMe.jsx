import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
    <section id="contactMe" className="profile-header">
      <div className="about-heading">
        <h4 className="section-subtitle">Get in touch</h4>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-me">
        <div className="contactme-container">
          <div className="contactme-text">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/25/education.png"
            />
            <a href="sanjaykumarvg26@gmail.com">sanjaykumarvg26@gmail.com</a>
          </div>
          <div className="contactme-text">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/25/education.png"
            />
            <a href="www.linkedin.com/in/sanjay-kumar-90966b1b1">LinkedIn profile</a>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sanjay Kumar. All rights reserved. Designed with ❤️ by Sanjay</p>
      </div>
    </footer>
    </>
  );
};

export default ContactMe;
