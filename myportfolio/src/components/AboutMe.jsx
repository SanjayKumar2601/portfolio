import SectionHeader from "./SectionHeader";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section id="about" className="about-section">

            <SectionHeader subtitle="Get to know more" title="About Me" />

            <div className="about-image">
                    <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRYwS5A0rCCfblZi-Tt2sj8U7LzDZ1u6x1g&s" alt="Profile" className="about-image" />
            </div>

            <div className="about">



                <div className="about-containers">
                    <div className="about-container">
                        <LazyLoadImage width="25" height="25" src="https://img.icons8.com/ios-filled/50/customer-insight.png" />
                        <p><span className="container-header">Experience</span><br></br><span className="container-subheader">2+ years</span><br></br><span className="container-subheader">Java Full Stack</span></p>
                    </div>

                    <div className="about-container">
                        <LazyLoadImage width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/25/education.png" />
                        <p><span className="container-header">Education</span><br></br><span className="container-subheader">B.E Electronics and Communication</span></p>
                    </div>
                </div>
                
                <div className="about-content">
                    <p>
                        I am a software developer with a passion for creating and developing software applications. I have experience in developing web applications using JavaScript, React, and Node.js. I am always eager to learn new technologies and improve my skills.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;