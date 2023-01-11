import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import ProjectWork from "../components/ProjectWork/ProjectWork";
import AboutMe from "../components/AboutMe/AboutMe";
import Contactme from "../components/Contact/Contactme";
import Loader from "../components/Loader";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1320);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Navbar />
          <Profile />
          <AboutMe />
          <ProjectWork />
          <Contactme />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
