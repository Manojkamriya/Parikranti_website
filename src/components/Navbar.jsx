import React from "react";

import { HashLink as Link } from "react-router-hash-link";

import "./navbar.css";
export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo-container">
      <Link to="/">
           <img  src="/Images/white_logo.png" alt="logo" />
         </Link>
        <img  src="/Images/parikranti-text.png" alt="text-image" />
      </div>
      <div className="search-panel">
      <input type="text"  placeholder="Search for NGO..." />
      </div>
      <div className="menu-items">
<ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About Us</Link></li>
  <li><Link to='/getInvolved'>Get Involved</Link></li>
  <li><Link to='/donation'>Donation</Link></li>
  <li><Link to='/idea'>Idea and Strategy</Link></li>
</ul>
      </div>
      <Link to="/donation#form" smooth>
   <button className="donate-button">Donate us</button>
   </Link>
    <div className="sign-up">
    <Link to="/login">
           <img src="/Images/signup.png" alt="error" />
        </Link>
        <p>Login / Register</p>
    </div>
    </nav>
  );
}
