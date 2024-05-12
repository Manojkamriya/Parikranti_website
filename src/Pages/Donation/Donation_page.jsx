import './donation.css'
import React from 'react';
import Form from './Form';
import Content from './Content';
const Donation = () => {
  return (
   <>

    <div className="donation-image-container">
   <img className="donate-img" src="./Images/donate-us.png" alt="error" /></div>
   <section id='donate-form'>
   <div className="why-donate-Us-container">
     
<Content/>
<Form/>
    </div>
    </section>
    <br></br>
              <br></br>    <br></br>
              <br></br> <br></br>    <br></br>
              <br></br>
 
   </>

  );
}

export default Donation;
