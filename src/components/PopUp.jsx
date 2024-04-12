import React from 'react'
import './popup.css'
export default function PopUp() {
  return (
    
                
            <>  <h2 className='title'>Get In Touch</h2>
              <form>
              <label className='form_label' for="username">Username</label>
                <input className='form_input' type='text' placeholder='Enter your name' required>
                </input>
                <label className='form_label' for="age">Age</label>
  <input className='form_input' type="number" min="0" max="150" placeholder="Enter your age" required></input>
                 <label className='form_label' for="username">Name of Institute</label> 
                
                <input className='form_input' type='text' placeholder='Enter your Institute name' required>
                </input>
                <label className='form_label' for="username">Working area</label>
                <input className='form_input' type='text' placeholder='Enter your working area' required>
                </input>
                <label className='form_label' for="username">Name of Head of Institute</label>
                <input className='form_input' type='text' placeholder="Head of institute" required>
                </input>
                <label className='form_label' for="username">Address of Institute</label>
                <input className='form_input' type='text' placeholder='Address of Institute' required>
                </input>
                <label className='form_label' for="username">Website of Institute</label>
                <input className='form_input' type='text' placeholder='Website of Institute' required>
                </input>
                <label className='form_label' for="Email">Email</label>
                <input className='form_input' type='email' placeholder='Enter your email' required>
                </input>



  <label className='form_label' for="phone" id='phone_no'>Phone Number:</label>
  <input className='form_input' type="tel"  placeholder="Enter your contact no." required></input>
  <label className='form_label' for="message">Message:</label>
  <textarea  className='form_textarea' rows="4" cols="50" placeholder="Enter your message"></textarea>
  <button type="submit" className='form_sub'>Submit</button>

              </form>
             
            
              </>
    
  )
}
