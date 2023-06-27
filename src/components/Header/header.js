import React from "react";
// import coverImage from "../../assets/coverImg/Abstract-round.png";
// import "../Header/header.css";
import "../../index.css";


function Header(props) {
  return (
    <header className="header-container">
      <h1 className="header-title">Orona</h1>
      {props.children}
    </header>
  );
}

export default Header;
