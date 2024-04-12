import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './Navbar.css'
export default function Navbar() {
  return (
  <nav id="navbar">
<div id="logo">
  <Link to='/home'><img src='/Images/white_logo.png' alt="error"/></Link>
   
</div>
<div id="sign">
  <Link to='/login'>
<img src='/Images/signup.png' alt="error" /></Link>
<p className='user_name'>Login / Register</p>
</div>
<div id="search-panel">
  <input  type="text" id="search-input" placeholder="Search for NGO..." />
</div>
<ul>
<NavLink to='/home'><li>Home</li></NavLink>
<NavLink to='/getInvolved'><li>Get Involved</li></NavLink>
   <NavLink to='/about'><li>About Us</li></NavLink>
  
   <NavLink to='/idea'><li>Idea And strategy</li></NavLink>
   <NavLink to='/donation'><li>Donation</li></NavLink>
   
   
</ul>

</nav>

  )
}
