import React from "react";
// import coverImage from "../../assets/coverImg/Abstract-round.png";
import profilePic from "../../assets/profilePic/Profile Pic Drawing.png";
// import "../About/about.css";
import "../../index.css";

function About() {
  return (
    <section className="page-container">
      <div className="about-2">
        <div className="image-container">
          <img className="profilePic" src={profilePic} alt="My Profile pic drawing"></img>
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            Hello, my name is Francisco Orona but my family and friend know me
            as Frankie. As a skilled software developer with, I have a diverse
            background that fuels my creativity.
          </p>
          <p>
            Before venturing into the world of technology, I embarked on an
            exciting musical journey. For several years, I toured and worked as
            a studio musician in Los Angeles, showcasing my talent on guitar,
            piano, bas and songwriting. I immersed myself in a wide range of
            music genres, from rock, country, and blues to pop, hip hop, and
            jazz. This experience allowed me to develop a deep appreciation for
            the power of artistic expression and its ability to connect with
            people.
          </p>
          <p>
            In parallel to my musical pursuits, I discovered an abiding passion
            for the realm of graphic design and digital artistry. Through
            channeling my artistic expression, I adeptly craft compelling logos
            and intricately detailed illustrations utilizing digital tools and
            techniques. You can find examples of this in my Artwork link at the
            top of the page as well as the the image of myself above this
            description which was made using Excalidraw.
          </p>
          <p>
           Drawing from my previous roles as a pharmacy technician and a business
           owner in medical billing, I've had the opportunity to develop a range
           of valuable qualities that greatly contribute to my work as a software
           developer. These qualities encompass my ability to handle challenging
           situations with composure and dedication, my inclination towards
           taking initiative and being self-motivated, a genuine empathy for
           other, and a strong commitment to precision and thoroughness. With my
           diverse skill set and the integration of music, graphic design, and
           technology, I strive to approach projects with a humble yet
           imaginative perspective
           </p>
          <p>
            Combining my technical expertise, musical abilities, and artistic
            sensibilities, I endeavor to deliver innovative solutions that
            surpass expectations. By blending my creativity, proficiency in
            multiple instruments, diverse understanding of genres, and
            technological prowess, I offer a distinctive perspective and
            contribute value to each project. As a software developer with a
            multifaceted background encompassing music, graphic design, and
            technology, I bring a unique and dynamic skill set to my work.
            Guided by a passion for creating meaningful connections through
            technology, my aim is to produce exceptional outcomes that
            seamlessly integrate functionality, aesthetics, and innovation.
          </p>
        </div>
      </div>
      {/* <img
        className="coverImage"
        src={coverImage}
        alt="Abstract Background"
      ></img> */}
      {/* </div> */}
    </section>
  );
}

export default About;