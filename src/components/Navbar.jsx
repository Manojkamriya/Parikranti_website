import React from "react";

import { HashLink as Link } from "react-router-hash-link";

import "./navbar.css";
export default function Navbar() {
  return (
    <nav id="navbar">
      <div id="logo-container">
        <Link to="/">
          <img id="logo" src="/Images/white_logo.png" alt="error" />
        </Link>
        <img id="text-image" src="/Images/parikranti-text.png" alt="error" />
      </div>
      <div id="sign">
        <Link to="/login">
          <img src="/Images/signup.png" alt="error" />
        </Link>
        <p>Login / Register</p>
      </div>
      <div id="search-panel">
        <input type="text" id="search-input" placeholder="Search for NGO..." />
      </div>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/getInvolved">
          <li>Get Involved</li>
        </Link>
     
        <Link to="/donation">
          <li>Donation</li>
        </Link>
        <Link to="/idea">
          <li>Idea And strategy</li>
        </Link>
        <Link to="/donation#form" smooth>
          {" "}
          <button className="donate-button">Donate Now</button>
        </Link>
      </ul>
    </nav>
  );
}
