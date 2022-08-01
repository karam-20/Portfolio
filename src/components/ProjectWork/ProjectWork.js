import React from "react";
import "./ProjectWork.css";

import ProjectCard from "./ProjectCard";
const ProjectWork = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectWork;
