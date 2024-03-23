import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
export default function Navbar() {
  return (
  <nav id="navbar">
<div id="logo">
<img src='/Images/logo.png' alt="error" />
</div>
<div id="sign">
<img src='/Images/signup.png' alt="error" />
</div>
<div className="search-panel">
  <input type="text" className="search-input" placeholder="Search..." />
</div>
<ul>
<Link to='/home'><li>Home</li></Link>
<Link to='/getInvolved'><li>Get Involved</li></Link>
   <Link to='/about'><li>About Us</li></Link>
  
   <Link to='/idea'><li>Idea And strategy</li></Link>
   
   
</ul>

</nav>

  )
}
