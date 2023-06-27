import React from "react";
import PageContent from "../PageContent/content";
import About from "../About/about";
import Portfolio from "../Portfolio/index";
import Artwork from "../Artwork/art";

import Resume from "../Resume/resume";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import backgroundImage from "../../assets/coverImg/Abstract-round.png";


function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "artwork":
        return <Artwork />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };


  return (
    <section className="page-container">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      {/* <h2>{capitalizeFirstLetter(currentPage.name)}</h2> */}
      <div className="textzone">
        <PageContent>{renderPage()}</PageContent>
      </div>
    </section>
  );
}

export default Page;
 