import './donation.css'
import React from 'react';
import Form from './Form';
import Content from './Content';
const Donation = () => {
  return (
   <>

    <div className="donation-image-container">
   <img className="donate-img" src="./Images/donate.jpg" alt="error" /></div>
  
   <div className="why-donate-Us-container">
   <section id='form'>
<Content/>
</section>
<Form/>
    </div>

    <br></br>
              <br></br>    <br></br>
              <br></br> <br></br>    <br></br>
              <br></br>
 
   </>

  );
}

export default Donation;
