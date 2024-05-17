
import './about.css';
import WorkGallery from './WorkGallery';
import MediaCoverage from './MediaCoverage';
import TechnicalMember from './TechnicalMember';
import VMF from './VMF';
import Intro from './Intro';
function About() {
  return (<>
  <div className='header-image'>
    <img src="./Images/about_us.png" className="img3" alt="error"/>
    </div>


   <VMF/>
<Intro/>

   
    <h1 id="goal">Leadership</h1>
    <div className="grid-container">
        <div className='member-card-container'>
       <img className="about-box img7" src="./Images/image.png" alt="error"/>
       </div>
       <div className='member-card-container'>
       <img className="about-box img7" src="./Images/image.png" alt="error"/>
       </div>
      
       <div className='member-card-container'>
       <img className="about-box img7" src="./Images/image.png" alt="error"/>
       </div>
      
       <div className='member-card-container'>
       <img className="about-box img7" src="./Images/image.png" alt="error"/>
       </div>
      
       <div className='member-card-container'>
       <img className="about-box img7" src="./Images/image.png" alt="error"/>
       </div>
          </div> 

          <h1 id="goal">Our Works</h1> 
<WorkGallery/>
    <h1 id="goal">Media Coverage</h1> 
    
    <MediaCoverage/>
   
    <h1 id="goal">Technical Team</h1> 
    <div className="technical-team">
    <TechnicalMember image='./Images/akshay-joshi.jpeg' name='Akshay Joshi'/>
       <TechnicalMember image='./Images/manoj.jpg' name='Manoj Kamriya'/>
       <TechnicalMember image='./Images/abhishek5.jpeg' name='Abhishek Verma'/>
       <TechnicalMember image='./Images/adarsh-patel.jpeg' name='Adarsh Singh Patel'/>
    </div>
   
    </>
  );
}

export default About;
