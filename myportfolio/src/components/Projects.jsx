import SectionHeader from "./SectionHeader";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {projects} from "../data/projects.js";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <SectionHeader subtitle="Browse My Recent" title="Projects" />

      <div className="projects-cards">
        {projects.map((project, idx) => (
        <Card className="card" key={project.title}>
            <Card.Img variant="top" src={project.img} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="primary" href={project.repo} target="_blank">
                Git Repo
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
