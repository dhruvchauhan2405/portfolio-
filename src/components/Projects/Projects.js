import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Genius from "../../Assets/Projects/Genuis.png";
import ShopHive from "../../Assets/Projects/ShopHive.png";
import PortFolio from "../../Assets/Projects/Portfolio.png";
import WiseCare from "../../Assets/Projects/WiseCare.png";
import ChatVibe from "../../Assets/Projects/ChatVibe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Genius}
              isBlog={false}
              title="GENUIS"
              description="The AI-Powered Content Generator Integration project represents a groundbreaking advancement in the field of content creation. By seamlessly amalgamating the cutting-edge capabilities of OpenAI and Replicate AI, this project redefines how content is generated, offering an unprecedented level of efficiency and quality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShopHive}
              isBlog={false}
              title="ShopHive-Admin"
              description="The ShopHive-Admin project marks a significant stride in optimizing product management processes, elevating customer engagement, and enhancing operational efficiency. By revamping the existing system, this project achieved accelerated updates and enriched user experiences through seamless navigation and captivating multi-image displays."
              ghLink="https://github.com/dhruvchauhan2405/GuessingGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShopHive}
              isBlog={false}
              title="ShopHive-Store"
              description="Customer Platform Development for Enhanced Engagement. As the driving force behind the development of the Customer Platform, this project propelled an impressive surge in customer engagement by revolutionizing user experiences through intuitive navigation and personalized billboards."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatVibe}
              isBlog={false}
              title="ChatVibe"
              description="Designed a personal chat room like discord to share resources and hang out with friends using React.js and Firebase.
              Added Google authentication and realtime communication among the users. 
              Used ReactRouter to turn the application into Single Page Application
              Application supports image sharing, emojis, and message deletion, elevating user communication and fostering seamless expression."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WiseCare}
              isBlog={false}
              title="WiseCare"
              description="In the creation of the Health and Wellness Platform, I engineered a robust authentication system that guarantees secure access to user accounts. This platform encompasses a holistic approach to well-being, offering personalized diet plans and nutrition guidance for optimal health, an extensive library of exercises and yoga poses for physical well-being, and a dedicated meditation page for nurturing inner peace and mindfulness."

              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortFolio}
              isBlog={false}
              title="Portfolio"
              description="Welcome to my personal portfolio, a curated collection of my work and projects that reflect my passion, dedication, and creative journey. Within these digital pages, you will discover a showcase of my accomplishments, endeavors, and endeavors that highlight my expertise and growth. "
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
