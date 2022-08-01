import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import ProjectWork from "../components/ProjectWork/ProjectWork";
import AboutMe from "../components/AboutMe/AboutMe";
import Contactme from "../components/Contact/Contactme";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <AboutMe />
      <ProjectWork />

      <Contactme />
      <Footer />
    </div>
  );
};

export default Home;
