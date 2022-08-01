import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import profile from "./profile-bg.png";
import { FaArrowDown } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <div className="content">
        <p>Hi, i'am a Web Developer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Resume
            <FaArrowDown
              className="icons-foo resume-btn"
              size={18}
              style={{ color: "#5f4bb6" }}
            />
          </Link>
        </div>
      </div>
      <div className="profile-img">
        <img src={profile} alt="profile-logo" />
      </div>
    </div>
  );
};

export default Profile;
