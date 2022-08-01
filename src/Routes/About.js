import React from "react";
import Footer from "../components/Footer/Footer";
import Heroimg from "../components/HeroImg/Heroimg";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/AboutMe/AboutMe";
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading="About" text="I am a friendly Front-end Developer." />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;
