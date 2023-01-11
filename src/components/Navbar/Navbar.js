import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { VscGrabber, VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const clickHandler = () => {
    setNavMenu(!navMenu);
  };
  const activeLink = "active-nav-link";
  const normalLink = "non-active";
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className={navMenu ? "nav-menu active-menu" : "nav-menu"}>
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => clickHandler()}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => clickHandler()}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/project"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => clickHandler()}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => clickHandler()}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="mobile-nav-icon" onClick={() => clickHandler()}>
        {navMenu ? (
          <VscChromeClose color="white" />
        ) : (
          <VscGrabber color="white" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
