import React from "react";
// import "../Artwork/art.css"
import "../../index.css";

// Import your artwork images
import artwork1 from "../../assets/art/Selfportrat of a selfportrat.png";
import artwork2 from "../../assets/art/Imperfections.png";
import artwork3 from "../../assets/art/Beat Blend Logo_1.png";
import artwork4 from "../../assets/art/Parrot2_Goalsy.png";
import artwork5 from "../../assets/art/Constitution.png";
import artwork6 from "../../assets/art/Dreamweavers2_Robe_Goalsy.png";
import artwork7 from "../../assets/art/Goalsy_logo.png";
import artwork8 from "../../assets/art/Reel_good_movieDatabase.png";
// import artwork9 from "../../assets/art/LA Night.png";
import artwork10 from "../../assets/art/Full Spectrum Medical Billing.png";

// ... import the remaining artwork images

function ArtworkPage() {
  // Create an array with your artwork images
  const artworkImages = [
    // artwork2,
    {
      image: artwork3,
      paragraph: "I crafted this logo for a project I created and contributed to called Beat Blend. Please see my Portfolio page for link and description.",
    },
    {
      image: artwork8,
      paragraph: "This logo was created fo a project I collaborated on called Reel Good.  Please see my Portfolio page for link and description.",
    },
    {
      image: artwork7,
      paragraph: "For another project I contributed on named Goalsy, I created the logo along with this character Taskman for the project.  Please see my Portfolio page for link and description.",
    },
    {
      image: artwork4,
      paragraph: "The image below was created for the Goalsy application.",
    },
    {
      image: artwork5,
      paragraph: "This image was created as an Icon in the Goalsy application.",
    },
    {
      image: artwork6,
      paragraph: "This image was made to represent an inventory item in the Goalsy aplication.",
    },
    {
      image: artwork1,
      paragraph: "The following image was created for the background to my Linkedin profile.",
    },
    {
      image: artwork2,
      paragraph: "This image is called `Imperfection off the vine` and was created for fun."
    },
    // {
    //   image: artwork9,
    //   paragraph: "This Image is a photo taken in Los Angeles of a California fire in the distance."
    // },
    {
      image: artwork10,
      paragraph: "I created this logo for my Medical Billing business, Full Spectrum Medical Billing."
    }
  ]  

  // Split the images into rows of 3
  const rows = [];
  for (let i = 0; i < artworkImages.length; i += 3) {
    const row = artworkImages.slice(i, i + 3);
    rows.push(row);
  }

  
  return (
    <div className="artwork-page">
      <div className="artwork-header">
        <h4>Welcome to my artwork page, 
          the following are examples of what ive done for projects or just for fun to satisfy my passion to create.  The descriptions are on top of the images themselves.</h4>
      </div>
      {rows.map((row, rowIndex) => (
        <div className="artwork-row" key={rowIndex}>
          {row.map(({ paragraph, image }, imageIndex) => (
            <div className="artwork-item" key={imageIndex}>
              <p className="artp">{paragraph}</p>
              <img
                className="artwork-image"
                src={image}
                alt={`Artwork ${rowIndex * 3 + imageIndex + 1}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default ArtworkPage;