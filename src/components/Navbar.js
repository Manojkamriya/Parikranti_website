import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav id="navbar">
      <div id="logo">
        <img src="/Images/logo.png" alt="error" />
      </div>
      <div id="sign">
        <img src="/Images/signup.png" alt="error" />
      </div>
      <div className="search-panel">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <ul>
        <li><Link to='/home'>Home</Link></li>

        <li><Link to = '/getInvolved'>Get Involved</Link></li>

        <li><Link to ='/about'>About Us</Link></li>

        <li><Link to = '/idea'>Idea And strategy</Link></li>

        <li><Link to = '/donation'>Donation</Link></li>

      </ul>
    </nav>
  );
}
