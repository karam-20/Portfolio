import React from "react";
import "./AboutMe.css";
import aboutme from "./aboutme.jpg";
import {
  skillsFrontend,
  aboutMe,
  backendLanguages,
  backendFrameworks,
  backendDatabases,
} from "./aboutMeContent";

const AboutMe = () => {
  return (
    <div>
      <div className="AboutMeContainer">
        <div className="about-title">
          <h1>About me</h1>
          <p>
            <span className="quotes">" </span>
            {aboutMe}
            <span className="quotes"> "</span>
          </p>
        </div>
        <div className="about-img">
          <img src={aboutme} alt="logo" />
        </div>
      </div>
      <div className="my-skills">
        <div className="skill-heading">
          <h2 className="skill-main-heading">FrontEnd</h2>
        </div>
        <div className="skill-description">
          {skillsFrontend.map((data, index) => {
            return (
              <div key={index} className="skill-des">
                <div className="skill-name">{data.name}</div>
                <div className="skill-exp">{data.value}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="backendHead">Backend</div>
      <div className="my-skills">
        <div className="skill-heading">
          <h2 className="skill-main-heading back-head">Languages</h2>
        </div>
        <div className="skill-description">
          {backendLanguages.map((data, index) => {
            return (
              <div key={index} className="skill-des">
                <div className="skill-name">{data.name}</div>
                <div className="skill-exp">{data.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-skills">
        <div className="skill-heading">
          <h2 className="skill-main-heading back-head">Frameworks</h2>
        </div>
        <div className="skill-description">
          {backendFrameworks.map((data, index) => {
            return (
              <div key={index} className="skill-des">
                <div className="skill-name">{data.name}</div>
                <div className="skill-exp">{data.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-skills">
        <div className="skill-heading">
          <h2 className="skill-main-heading back-head">Database</h2>
        </div>
        <div className="skill-description">
          {backendDatabases.map((data, index) => {
            return (
              <div key={index} className="skill-des">
                <div className="skill-name">{data.name}</div>
                <div className="skill-exp">{data.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
