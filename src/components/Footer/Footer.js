import React from "react";
import "./Footer.css";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a href="https://www.facebook.com/jangirkarmpal123/" className="icons">
          <FaFacebook
            className="icons-foo"
            size={18}
            style={{ color: "#262626" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/karampal-jangir-440a241a2/"
          className="icons"
        >
          <FaLinkedin
            className="icons-foo"
            size={18}
            style={{ color: "#262626" }}
          />
        </a>
        <a href="https://www.instagram.com/ig_xzital/" className="icons">
          <FaInstagram
            className="icons-foo"
            size={18}
            style={{ color: "#262626" }}
          />
        </a>
        <a href="https://github.com/karam-20" className="icons">
          <FaGithub
            className="icons-foo"
            size={18}
            style={{ color: "#262626" }}
          />
        </a>
      </div>
      <a href="/contact" className="footer-btn">
        <button class="cta">
          <span class="hover-underline-animation"> Contact us </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Footer;
