import React from 'react';

function Form() {
  return (
    <form id='donation-form'>
      <img className="parikranti-image" src='/Images/Parikranti-image.png'/>
      <div className='my-fields'>
                <div className='field'>
              <label className='form_label' for="username">Username</label>
                <input className='form_input' type='text' placeholder='Enter your name' required>
                </input>
                </div>
                <div className='field'>
                <label className='form_label' for="Email">Email</label>
                <input className='form_input' type='email' placeholder='Enter your email' required>
                </input>
                
  </div>
  </div>

  <div className='my-fields'>
                <div className='field'>
                <label className='form_label' for="phone" id='phone_no'>Phone Number:</label>
  <input className='form_input' type="tel"  placeholder="Enter your contact no." required></input>
               
                </div>
                <div className='field'>
                <label className='form_label' for="gender">Gender</label>
            
        <select  name="projects">
          <option value="project1">Male</option>
          <option value="project2">Female</option>
          <option value="project2">Other</option>

          </select>
</div>
</div>
<div className='my-fields'>
                <div className='field'>
                <label className='form_label' for="username">Address</label>
                <input className='form_input' type='text' placeholder=' Enter your Address' required>
                </input>
               
                </div>
                <div className='field'>
                <label className='form_label' for="username">Name of city</label>
                <input className='form_input' type='text' placeholder=" Enter name of your city" required>
                </input>
</div>
</div>       
<div className='my-fields'>
                <div className='field'>
                <label className='form_label' for="username">State</label>
                <input className='form_input' type='text' placeholder=' Enter your state name' required>
                </input>
                </div>
                <div className='field'>
               
                <label className='form_label' for="pin">PIN Code</label>
  <input className='form_input' type="number" placeholder=" Enter your PIN Code" required></input>
</div>
</div>
<div className='pan-field'>
<label className='form_label' for="username">PAN Card</label>
      <input className='form_input' type='text' placeholder=' Enter your PAN Number'>
      </input>
      </div>
      <div className='request'>  <p>Please note that if you do not provide your PAN Number, you will not be able to claim 50% tax exemption u/s 80G in India</p></div>
<div className="checkbox-container">
<input className='form_input' id="checkbox" type="checkbox"></input>
<div className='declare'>I hereby declare that I am a citizen of India, making this donation out of my own funds. The information provided above is correct to the best of my knowledge. I know that all further communications will be done on contact details provided above</div>
</div>
< img className='form-image' src="./Images/cards-payment-strip2.png" alt="error"/>
<p id='payment'>We accept all major payment methods</p>
<div className='btn-container'>


<button className='donate' type="submit">Continue to Payment</button>
<button className='donate'>Reset</button>
</div>
    </form>
 
  );
}
export default Form;