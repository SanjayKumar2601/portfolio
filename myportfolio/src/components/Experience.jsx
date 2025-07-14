import SectionHeader from "./SectionHeader";
import "./Experience.css";
import { experienceData } from "../data/experience.js";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <SectionHeader subtitle="Explore My" title="Experience" />

      <div className="exp-containers">
        {Object.entries(experienceData).map(([section, items]) => (
          <div className="exp-container" key={section}>
            <h2 className="section-title">{section}</h2>
            <div className="exp-list-wrapper">
              <ul>
                {items.map((item, idx) => (
                  <li key={section + item.lang}>
                    <span className={`lang ${item.exp === 'Experienced' ? 'experienced' : ''}`}>{item.lang}</span>
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
