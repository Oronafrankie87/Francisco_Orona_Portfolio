
import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, link } = project;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="project" key={name}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={require(`../../assets/projects/${name}.png`)}
          alt={removeHyphensAndCapitalize(name)}
          className="project-bg"
          onClick={handleClick}
        />
      </a>
    </div>
  );
}

export default Project;
