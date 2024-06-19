
import { Link } from "react-router-dom";
import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      {/* header */}
      <div className="footer-header">
        {/* <div className="image"></div> */}<p>Connect with us</p>
        <div className="donate-icons">
          <div className="icons">
            <a
              href="https://www.instagram.com/parikrantifoundation/?igsh=c2Y2MWN1ZWJqNHpi"
              className="icon"
              rel="noreferrer" 
              target="_blank"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/parikrantifoundation/"
              className="icon"
              rel="noreferrer" 
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ParikrantiFoundation/"
              className="icon"
              rel="noreferrer" 
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
              </svg>
            </a>

            <a
              href="https://x.com/ParikrantiF?s=08"
              className="icon"
              rel="noreferrer" 
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@parikrantifoundation"
              className="icon"
              rel="noreferrer" 
              target="_blank"
            >
           
              <img className="icon2" src="./Images/youtube_icon.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
      {/* header */}

      <div className="footer-container">
        <div className="footer-section">
          <h4>PARIKRANTI FOUNDATION</h4>
          <p>This is a Non-Government Organization.</p>
          <img
       
        src="/Images/Parikranti-image.png"
        alt="error"
      />
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>
              {/* {" "} */}
              <Link to="/terms">
                Terms Of Use
              </Link>
            </li>

            <li>
              {" "}
              <Link to="/policy" >
               Privacy Policy
              </Link>
            </li>

            <li>
            <Link to="/donation#form" >
              Donate Now
              </Link>
            </li>

           
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/getInvolved">
              <li>Get Involved</li>
            </Link>

            <Link to="/about">
              <li>About Us</li>
            </Link>

            <Link to="/idea">
              <li>Idea And strategy</li>
            </Link>

            <Link to="/donation">
              <li>Donation</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONTACT</h4>
          <ul>
            <li>
            <img className="icon2" src="./Images/location-icon.svg" alt=""/>

              <li>  EH-81, Scheme no. 54, Vijay nagar, near Bapat Square, Indore (452010), Madhya Pradesh</li>
            </li>
            <li>
             
              <img className="icon2" src="./Images/email_icon.svg" alt=""/>
              <a href="mailto:parikrantifoundation@gmail.com" target="_blank"  rel="noreferrer" >
                parikrantifoundation@gmail.com
              </a>
            </li>
            <li>
             
              <img className="icon2" src="./Images/email_icon.svg" alt=""/>
              <a href="mailto:admin@parikrantifoundation.org" target="_blank"  rel="noreferrer" >
                admin@parikrantifoundation.org
              </a>
            </li>
            <li>
            
              <img className="icon2" src="./Images/call_icon.svg" alt=""/>
              6267785438 / 7225999084
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &#169; Parikranti Foundation 2024</p>
      </div>
    </footer>
  );
}

export default Footer;