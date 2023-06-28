import React from "react";
// import "./resume.css"
import "../../index.css";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          Download my{" "}
          <a href="https://1drv.ms/w/s!Akgxj5gotKy6gRd_x734NRWb1i_1">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>AWS</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <h3>Creative/Art Proficiencies</h3>
          <ul className="skills">
            <li>Logic Pro</li>
            <li>Pro Tools</li>
            <li>Photoshop</li>
            <li>Maya</li>
            <li>Max</li>
            <li>Music Theory</li>
            <li>Guitar/Bass repair</li>
            <li>Audio Production/Post Production</li>
          </ul>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
