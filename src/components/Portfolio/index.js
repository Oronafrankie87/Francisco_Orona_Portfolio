import React, { useState } from "react";
import Project from "../Project/project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Beat Blend",
      description: "MERN Stack",
      link: "https://beat-blend-8886e9ea479f.herokuapp.com/",
      repo: "https://github.com",
    },
    {
      name: "Goalsy",
      description: "SQL/Javascript/Handlebars",
      link: "https://goalsy.herokuapp.com/",
      repo: "https://github.com",
    },
    {
      name: "Secure Pass",
      description: "JavaScript/CSS",
      link: "https://oronafrankie87.github.io./SecurePass/",
      repo: "https://github.com",
    },
    {
      name: "Drawy Draw",
      description: "JavaScript/CSS",
      link: "https://oronafrankie87.github.io/Drawy_Draw/",
      repo: "https://github.com",
    },
    {
      name: "The Nonsense Quiz",
      description: "JavaScript/CSS",
      link: "https://oronafrankie87.github.io/The-Nonsense-Quiz/",
      repo: "https://github.com",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
