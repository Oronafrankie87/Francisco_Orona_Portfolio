import React from "react";
import Email from "../../assets/icons/Email icon.png"
import GitHub from "../../assets/icons/GitHub icon.png"
import Music from "../../assets/icons/Music icon.png"
import Linkedin from "../../assets/icons/Linkedin icon.png"


function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      name: GitHub,
      link: "https://github.com/Oronafrankie87",
    },
    {
      name: Email,
      link: "mailto:oronafrankie87@gmail.com",
    },
    {
      name: Music,
      link: "",
    },
    {
      name: Linkedin,
      link: "https://www.linkedin.com/in/oronafrankie87/",
    },
  ];

  return (
    <footer className="flex-row px-1">
      <h3 className="contacts-header">Contacts:</h3>
      {icons.map((icon) => (
        <a 
          href={icon.link}
          key={icon.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.name === GitHub ||
          icon.name === Email ||
          icon.name === Music ||
          icon.name === Linkedin ? (
            <img
              src={icon.name}
              alt="Social Media Icon"
              style={{ width: "65px", height: "65px" }}
            />
          ) : (
            <i className={icon.name}></i>
          )}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
