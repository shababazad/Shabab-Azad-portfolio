import React from "react";
import { Col, Row } from "react-bootstrap";
import excel from "../../Assets/TechIcons/excel.svg";
import tableau from "../../Assets/TechIcons/tableau.svg";
import python from "../../Assets/TechIcons/python.png";
import sql from "../../Assets/TechIcons/sql.png";
import bi from "../../Assets/TechIcons/bi.svg";
import anaconda from "../../Assets/TechIcons/anaconda.png";
import tailwind from "../../Assets/TechIcons/tailwind.png";
import javascript from "../../Assets/TechIcons/javascript.png";
import react from "../../Assets/TechIcons/react.png";
import nextjs from "../../Assets/TechIcons/nextjs.png";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sql} alt="sql" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tableau} alt="tableau" />
        <div className="tech-icons-text">Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={excel} alt="excel" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bi} alt="power-bi" />
        <div className="tech-icons-text">Power-bi</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={anaconda} alt="anaconda" />
        <div className="tech-icons-text">Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tailwind} alt="tailwind-css" />
        <div className="tech-icons-text">Tailwind-CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} alt="react" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nextjs} alt="next-js" />
        <div className="tech-icons-text">Next-JS</div>
      </Col>
      
    </Row>
  );
}

export default Techstack;
