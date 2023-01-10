import React from "react";
import "./Profile.css";

import profile from "./profile-bg.png";
import { FaArrowDown } from "react-icons/fa";
import { Slide } from "react-reveal";
import Typed from "react-typed";

const Profile = () => {
  return (
    <div className="profile">
      <div className="content">
        <Slide bottom>
          <h1 className="profile-name">Karampal Jangir</h1>
        </Slide>
        <Slide bottom>
          <div className="animated-titles">
            <Typed
              strings={[
                "All round Programmer and a technical geek",
                "Fitness Enthusiast",
                "Full Stack Web Developer",
              ]}
              typeSpeed={80}
              backSpeed={10}
              loop
            />
          </div>
        </Slide>
        <Slide bottom>
          <p className="profile-info">
            Didn't worked professionally till now , but i have good experience
            in different domains (Gaming, e-commerce, ed-tech etc) to develop
            different FrontEnd Design . My expertise includes building good
            looking FrontEnd and dynamic websites.
          </p>
        </Slide>
        <Slide bottom>
          <div className="resume-button-main">
            <a
              className="resume-button-main"
              href="/Resume/Resume.pdf"
              download={"resumeport.pdf"}
            >
              <button className="resume-button">Get Resume</button>

              <FaArrowDown
                className="icons-foo resume-btn"
                size={18}
                style={{ color: "#5f4bb6" }}
              />
            </a>
          </div>
        </Slide>
      </div>
      <div className="profile-img">
        <Slide right>
          <img src={profile} alt="profile-logo" />
        </Slide>
      </div>
    </div>
  );
};

export default Profile;
