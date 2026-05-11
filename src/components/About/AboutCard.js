import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mohammad Shabab Azad</span>{" "}
            from <span className="purple">New Delhi, India</span>.
            <br />
            <br />I have completed my Bachelor of Computer Applications (BCA) 
             from{" "}
            <span className="purple">Amity University</span>.
            <br />
            <br />
            Apart from coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing different Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Coding Problems 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Discover patterns,drive decisions,create value."{" "}
          </p>
          <footer className="blockquote-footer">Shabab Azad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
