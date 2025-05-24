import React from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <section id="about" className="projects-section">
      <div className="about-heading">
        <h4 className="section-subtitle">Browse My recent</h4>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-cards">
        <Card className="card">
          <Card.Img
            variant="top"
            src="/sky_scanner_thumb.jpg"
          />
          <Card.Body>
            <Card.Title>Sky Scanner</Card.Title>
            <Card.Text>
              Wanna book a flight? Sky Scanner is the best place to find
              affordable flights. Search for flights, compare prices, and book.
            </Card.Text>
            <Button variant="primary">Git Repo</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src="/portfolio_thumb.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src="/sonarqube_thumb.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
