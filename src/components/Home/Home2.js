import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Data Analyst who enjoys turning raw data into meaningful insights and actionable strategies. Over time, I’ve worked with different analytical tools and technologies, developing a passion for uncovering trends, solving business problems, and creating data-driven solutions that support smarter decision-making.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, Excel, Power BI, Tableau, and JavaScript{" "}
                </b>
              </i>
              — and I enjoy working with data across different domains and platforms.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Data Visualization, Business Intelligence, Predictive Analytics,and Machine Learning,{" "}
                </b>
              </i>
               along with discovering innovative ways to turn complex datasets into valuable business solutions.
              <br />
              <br />
              Whenever possible, I love building
              <b className="purple"> interactive dashboards, analyzing real-world datasets,and creating insightful reports </b> using modern tools and technologies.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
