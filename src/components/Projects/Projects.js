import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieanalysis from "../../Assets/Projects/movieanalysis.png";
import worldlayoffcleaning from "../../Assets/Projects/worldlayoffcleaning.png";
import worldlayoffeda from "../../Assets/Projects/worldlayoffeda.png";
import sbdirectory from "../../Assets/Projects/sbdirectory.png";
import tableaudash from "../../Assets/Projects/tableaudash.png";



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
              imgPath={sbdirectory}
              isBlog={false}
              title="SB-Directory"
              description="Startup idea sharing platform built with Next.js, Sanity, and Sentry. Allows users to publish startup ideas, manage personal profiles, and explore ideas shared by other entrepreneurs. Features include real-time content updates, startup search functionality, visitor tracking on idea cards, and error monitoring for improved application performance and reliability."
              ghLink="https://github.com/shababazad/sb-directory"
              demoLink="https://sb-directory.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieanalysis}
              isBlog={false}
              title="MovieLens"
              description="Movie data analysis project focused on cleaning, transforming, and analyzing large datasets using Python, Pandas, and NumPy. Extracted insights on genres, popularity trends, voting patterns, and yearly movie releases through exploratory data analysis."
              ghLink="https://github.com/shababazad/MovieLens-Data-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldlayoffcleaning}
              isBlog={false}
              title="Global Layoffs Data Cleaning"
              description="SQL-based data cleaning project focused on transforming raw layoffs datasets by removing duplicates, handling missing values, standardizing inconsistent records, and preparing structured data for accurate analysis and meaningful business insights using MySQL, CTEs, and window functions."
              ghLink="https://github.com/shababazad/Global-Layoffs-Data-Cleaning-Transformation-using-SQL"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldlayoffeda}
              isBlog={false}
              title="World Layoffs Data Analysis"
              description="SQL-based exploratory data analysis project focused on global layoffs trends using MySQL. Analyzed companies, industries, countries, and yearly workforce reductions through advanced queries, CTEs, aggregations, and window functions to uncover insights and visualize workforce patterns."
              ghLink="https://github.com/shababazad/Global-Layoffs-Data-Analysis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tableaudash}
              isBlog={false}
              title="Global Layoff Insights Dashboard"
              description="Interactive Tableau dashboard analyzing global layoffs through country maps, industry breakdowns, monthly trends, and KPI metrics. Helps users identify workforce reduction patterns, compare affected sectors, and understand layoff impacts across different regions and time periods."
              demoLink="https://public.tableau.com/app/profile/mohammad.shabab.azad/viz/Book1_17785253564870/GlobalLayoffsDashboard?publish=yes"
              ghLink="https://github.com/shababazad/Global-Layoff-Insights-Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
