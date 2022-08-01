import React from "react";
import "./ProjectCard.css";
import work1 from "./work1.JPG";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <img src={work1} alt="" />
        <h1 className="project-title">Baatkaro Website</h1>
        <div className="pro-details">
          <p>
            This is a social media website design like facebook with different
            sections like chat, post feed, stories......
          </p>
          <div className="pro-btn">
            <NavLink to="url.com" className="btn">
              VIEW
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
