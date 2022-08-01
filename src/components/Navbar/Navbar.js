import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const activeLink = "active-nav-link";
  const normalLink = "non-active";
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="nav-menu">
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/project"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
