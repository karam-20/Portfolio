import React from "react";
import Footer from "../components/Footer/Footer";
import Heroimg from "../components/HeroImg/Heroimg";
import Navbar from "../components/Navbar/Navbar";
import Contactme from "../components/Contact/Contactme";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading="Contact" text="Lets have a Chat" />
      <Contactme />
      <Footer />
    </div>
  );
};

export default Contact;
