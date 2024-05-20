
import './about.css';
import WorkGallery from './WorkGallery';
import MediaCoverage from './MediaCoverage';
import MemberCard from './MemberCard';
import TechnicalMember from './TechnicalMember';
import Statements from './Statements';
import Intro from './Intro';
import LeaderShip from './LeaderShip';
function About() {
  return (<>
  <div className='header-image'>
    <img src="./Images/about_us.png" className="aboutus-image" alt="error"/>
    </div>
         <Statements/>
         <Intro/>
         <LeaderShip/>
        <WorkGallery/>
        <MediaCoverage/>
   
    <h1 id="heading">Technical Team</h1> 
    <div className="technical-team">
    <TechnicalMember image='./Images/akshay-joshi.jpeg' name='Akshay Joshi'/>
       <TechnicalMember image='./Images/manoj.jpg' name='Manoj Kamriya'/>
       <TechnicalMember image='./Images/abhishek5.jpeg' name='Abhishek Verma'/>
       <TechnicalMember image='./Images/adarsh-patel.jpeg' name='Adarsh Singh Patel'/>
    </div>
   
   <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  );
}

export default About;
