import React from "react";
import "./AboutMe.css";
import aboutme from "./aboutme.jpg";
import html from "./html.svg";
import bootstrap from "./bootstrap.svg";
import clang from "./clang.svg";
import css from "./css.svg";
import js from "./js.svg";
import react from "./react.svg";

const AboutMe = () => {
  return (
    <div>
      <div className="AboutMeContainer">
        <div className="about-title">
          <h1>About me</h1>
          <p>
            <span className="quotes">" </span>Hi, I'm Karampal Jangir, a
            self-taught passionate FrontEnd developer from India, currently
            working myself as a FrontEnd engineer. I've been building stuff on
            the web since when I was in 2nd year of my college, I've made some
            side projects and I also posses magical powers of using react to
            build delightful user interfaces.<span className="quotes"> "</span>
          </p>
        </div>
        <div className="about-img">
          <img src={aboutme} alt="logo" />
        </div>
      </div>
      <div className="skillset">
        <div className="skill-title">My Skillsets</div>
        <div className="cards">
          <div class="card">
            <div className="card-image">
              <img src={html} alt="logo" />
            </div>
          </div>

          <div class="card">
            <div className="card-image">
              <img src={css} alt="logo" />
            </div>
          </div>

          <div class="card">
            <div className="card-image">
              <img src={js} alt="logo" />
            </div>
          </div>

          <div class="card">
            <div className="card-image">
              <img src={react} alt="logo" />
            </div>
          </div>

          <div class="card">
            <div className="card-image">
              <img src={bootstrap} alt="logo" />
            </div>
          </div>
          <div class="card">
            <div className="card-image">
              <img src={clang} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
