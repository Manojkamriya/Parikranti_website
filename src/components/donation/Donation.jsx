import './donation.css'
import React from 'react';
import Form from './Form';
import Content from './Content';
const Donation = () => {
  return (
   <>

    <div className="donation-image-container">
   <img src="./Images/donate.jpg" alt="donateUs" /></div>
  
   <div className="why-donate-Us-container">
  
<Content/>
<section id='form'>
<Form/>
</section>
    </div>

    <br></br>
              <br></br>    <br></br>
              <br></br> <br></br>    <br></br>
              <br></br>
 
   </>

  );
}

export default Donation;
