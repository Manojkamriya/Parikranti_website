import React from 'react'
import './popup.css'
export default function PopUp() {
  return (
    
                
            <>  <h2 className='title'>Get In Touch</h2>
              <form>
              <label className='form_label' for="username">Username</label>
                <input className='form_input' type='text' placeholder=' Enter your name' required>
                </input>
                <label className='form_label' for="Email">Email</label>
                <input className='form_input' type='email' placeholder=' Enter your email' required>
                </input>
                <label className='form_label' for="phone" id='phone_no'>Phone Number:</label>
  <input className='form_input' type="tel"  placeholder=" Enter your contact no." required></input>
  <label className='form_label' for="gender">Gender</label>
        <select  name="projects">
          <option value="project1">Male</option>
          <option value="project2">Female</option>
          <option value="project2">Other</option>

          </select>
  <label className='form_label' for="username">Address</label>
                <input className='form_input' type='text' placeholder=' Enter your Address' required>
                </input>
                <label className='form_label' for="username">Name of city</label>
                <input className='form_input' type='text' placeholder=" Enter name of your city" required>
                </input>
                <label className='form_label' for="username">State</label>
                <input className='form_input' type='text' placeholder=' Enter your state name' required>
                </input>
               
                <label className='form_label' for="pin">PIN Code</label>
  <input className='form_input' type="number" placeholder=" Enter your PIN Code" required></input>

  <label className='form_label' for="blood-group">Blood Group</label>
        <select  name="projects">
          <option value="project1">A+</option>
          <option value="project2">A-</option>
          <option value="project3">B+</option>
          <option value="project1">B-</option>
          <option value="project2">AB+</option>
          <option value="project3">AB-</option>
          <option value="project1">O+</option>
          <option value="project2">O-</option>
          </select>

         <label className='form_label' for="query-topic">Query Topic</label>
        <select  name="projects">
          <option value="project1">Inernship</option>
          <option value="project2">Voluntership</option>
          <option value="project3">Collabration</option>
          <option value="project1">Partnership</option>
          <option value="project2">Donation</option>
          <option value="project3">SDG-17</option>
          <option value="project1">Others</option>

          </select>   


 
  <label className='form_label' for="message">Message:</label>
  <textarea  className='form_textarea' rows="4" cols="50" placeholder=" Enter your message"></textarea>
<div className='btn-container'>


  <button type="submit" className='form_sub'>Submit</button>
  <button className='form_sub'>Reset</button>
  </div>
              </form>
             
            
              </>
    
  )
}
