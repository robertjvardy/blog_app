import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <div className="navBar">
      <ul>
        <li className="link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="link">
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li className="link">
          <NavLink to="/new-post">New Post</NavLink>
        </li>
        <li className="link">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
