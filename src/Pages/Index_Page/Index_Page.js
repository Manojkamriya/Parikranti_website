
import './Index_page.css';
import {Link} from 'react-router-dom'

function Index_Page() {
  return (
    <div>
      <Link to="/home"><img id="logo1" src='./Images/white_logo.png' width="170px" height="170px" alt="Logo" /></Link>
      <div id="name_1">PARIKRANTI FOUNDATION</div>

      <div id="boxrow1">
        <div className="item" id="box1">The united social federation</div>
        <div className="item" id="box2">The social panchayat</div>
        <div className="item" id="box3">The X fundamental</div>
        <div className="item" id="box4">The Ultra Bharat</div>
      </div>

      <div id="boxrow2">
        <div className="item" id="box5">The Big Heart</div>
        <div className="item" id="box6">The X Founders</div>
        <div className="item" id="box7">The Holistic Incubation</div>
        <div className="item" id="box8">The X solution pvt ltd</div>
      </div>

      <button className="btn1">Get Involved</button>
    </div>
  );
}

export default Index_Page;
