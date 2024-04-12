import React from 'react'
import './admin_div.css';

function admin_div() {
  return (
  <>
  <div className="flip-card admin_pic">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src= './Images/team_member.png' alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1>Member_name</h1>
      <p>NGO employee</p>
      <p>We love to help people</p>
    </div>
  </div>
</div>
  </>
  )
}

export default admin_div