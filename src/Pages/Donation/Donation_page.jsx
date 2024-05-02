
// import {Button} from 'reactstrap';
// import Figures from './Figures_div';
// import {Card} from 'reactstrap';
import './donation.css'

const Donation = () => {
  return (
   <>


   <img src="./Images/donate-us.png" alt="error" />
   <div className="why-donate-Us-container">
      <div className="why-donate-Us-content">
        <h1 className="para_W">Why <span id='donate-text'>Donate Us?</span></h1>
        <p className="para_D">Donation at Parikranti Foudation is a direct investment in a better world, as we actively work towards achieving all 17 Sustainable Development Goals (SDGs) outlined by the United Nations. These goals are ambitious and essential for creating a sustainable and equitable future for everyone on the planet.</p>

        <p className="para_D">By supporting our NGO, you're contributing to initiatives that tackle some of the world's most pressing issues, from ending poverty and hunger to promoting gender equality, ensuring quality education for all, and combating climate change. Each goal is interconnected, and progress in one area often leads to improvements in others.</p>

        <p className="para_D">Your donation helps us implement projects and programs that have a tangible impact on communities around the globe. Whether it's providing clean water and sanitation, promoting renewable energy, empowering women and girls, or protecting biodiversity, your contribution makes a real difference.</p>

        <p className="para_D">Moreover, our NGO is committed to transparency and accountability, ensuring that your donation is used efficiently and effectively. We regularly provide updates on our projects, showing you exactly how your support is making an impact.In a world facing complex challenges, your donation to our NGO isn't just a financial contribution; it's an investment in a brighter, more sustainable future for generations to come. Join us in our mission to make the world a better place for all.
</p>
    <p className="para_D">In a world facing complex challenges, your donation to our NGO isn't just a financial contribution; it's an investment in a brighter, more sustainable future for generations to come. Join us in our mission to make the world a better place for all.</p>  
      </div>
      <form id='donation-form'>
              <label className='form_label' for="username"> Username</label>
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
           
      {/* <iframe 
        className="whyUs-content"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/NWBHTIB6Rw4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe> */}
    </div>
    <br></br>
              <br></br>    <br></br>
              <br></br> <br></br>    <br></br>
              <br></br>
  {/* <div style={{textAlign : 'center', margin : '2vh'}}>
  
      <Button style={{fontSize : '3vh'}}
    color="danger">
    The Big Heart
  </Button>
  </div>

  <Figures/>
  
  <Card style={{height : '30vh' , fontWeight : 'bold',fontSize : '3vh'}}>Documents</Card> */}
   </>

  );
}

export default Donation;
