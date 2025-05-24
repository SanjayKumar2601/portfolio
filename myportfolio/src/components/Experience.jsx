import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="about-heading">
        <h4 className="section-subtitle">Explore My</h4>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="exp-containers">
        <div className="exp-container">
          <h2 className="section-title">Backend</h2>
          <div className="exp-list-wrapper">
            <ul>
              <li>
                <span className="lang">Java</span>
                <span className="exp">Experienced</span>
              </li>
              <li>
                <span className="lang">Spring Boot</span>
                <span className="exp">Experienced</span>
              </li>
              <li>
                <span className="lang">Microservices</span>
                <span className="exp">Intermidiate</span>
              </li>
              <li>
                <span className="lang">JavaScript</span>
                <span className="exp">Intermidiate</span>
              </li>
              <li>
                <span className="lang">AWS</span>
                <span className="exp">Basic</span>
              </li>
              <li>
                <span className="lang">GCP</span>
                <span className="exp">Intermidiate</span>
              </li>
              <li>
                <span className="lang">Jenkins</span>
                <span className="exp">Basic</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="exp-container">
          <h2 className="section-title">Frontend</h2>
          <div className="exp-list-wrapper">
            <ul>
              <li>
                <span className="lang">React Js</span>
                <span className="exp">Basic</span>
              </li>
              <li>
                <span className="lang">HTML/CSS</span>
                <span className="exp">Intermidiate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
