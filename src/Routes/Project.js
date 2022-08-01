import React from "react";
import Footer from "../components/Footer/Footer";
import Heroimg from "../components/HeroImg/Heroimg";
import Navbar from "../components/Navbar/Navbar";
import ProjectWork from "../components/ProjectWork/ProjectWork";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading="Projects" text="Some of my most recent works." />
      <ProjectWork />
      <Footer />
    </div>
  );
};

export default Project;
