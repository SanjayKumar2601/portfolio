import React from "react";
import "./Experience.css";

const experienceData = {
  Backend: [
    { lang: "Java", exp: "Experienced" },
    { lang: "Spring Boot", exp: "Experienced" },
    { lang: "Microservices", exp: "Intermediate" },
    { lang: "JavaScript", exp: "Intermediate" },
    { lang: "AWS", exp: "Basic" },
    { lang: "GCP", exp: "Intermediate" },
    { lang: "Jenkins", exp: "Basic" },
  ],
  Frontend: [
    { lang: "React Js", exp: "Basic" },
    { lang: "HTML/CSS", exp: "Intermediate" },
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="about-heading">
        <h4 className="section-subtitle">Explore My</h4>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="exp-containers">
        {Object.entries(experienceData).map(([section, items]) => (
          <div className="exp-container" key={section}>
            <h2 className="section-title">{section}</h2>
            <div className="exp-list-wrapper">
              <ul>
                {items.map((item, idx) => (
                  <li key={item.lang + idx}>
                    <span className="lang">{item.lang}</span>
                    <span className="exp">{item.exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
