import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
        <div className="about-heading">
                <h4 className="section-subtitle">Explore My</h4>
                <h2 className="section-title">Experience</h2>
            </div>

        <div className="about-containers">
            <div className="about-container">
                <h2 className="section-title">Backend</h2>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Microservices</li>
                        <li>JavaScript</li>
                        <li>RESTful APIs</li>
                        <li>AWS</li>
                        <li>GCP</li>
                        <li>Jenkins</li>
                        <li>Git</li>
                    </ul>
            </div>
            <div className="about-container">
                <h2 className="section-title">Frontend</h2>
                    <ul>
                        <li>React Js</li>
                        <li>HTML/CSS</li>
                    </ul>
                <h2 className="section-title">Frontend</h2>
                    <ul>
                        <li>React Js</li>
                        <li>HTML/CSS</li>
                    </ul>
            </div>
        </div>
    </section>
  );
}

export default Experience;