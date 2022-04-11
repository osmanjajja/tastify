import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <nav id="navbar" class="">
      <div class="nav-wrapper">
        <div class="logo">
          <Link to="#home"></Link>
        </div>

        <ul id="menu">
          <li>
            <Link to="/home">Search</Link>
          </li>
          <li>
            <Link to="/ingredients">Find By Ingredient</Link>
          </li>
          <li>
            <Link to="/nutrients">find By Nutrients</Link>
          </li>
          <li>
            <Link to="/similar">Search Similar</Link>
          </li>
          <li>
            <Link to="/dashboard">Login Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
