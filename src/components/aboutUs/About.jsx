
import './about.css';

import Statements from './Statements';
import Intro from './Intro';
import LeaderShip from './LeaderShip';
import WorkGallery from './WorkGallery';
import MediaCoverage from './MediaCoverage';
import TechnicalTeam from './TechnicalTeam';
function About() {
  return (<>
  <div className='header-image'>
    <img src="./Images/about_us.png"  alt="error"/>
    </div>
         <Statements/>
         <Intro/>
         <LeaderShip/>
         <WorkGallery/>
        <MediaCoverage/>
   {/* <TechnicalTeam/> */}
   
   
   <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  );
}

export default About;
