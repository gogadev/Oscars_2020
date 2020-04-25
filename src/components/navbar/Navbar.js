import React from "react";
import { Link } from "react-router-dom";

import Title from "../../assets/title.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-title">
          <Link to="/">
            <img src={Title} alt="" />
          </Link>
        </div>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Navbar;
