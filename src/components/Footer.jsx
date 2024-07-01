// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      {/* header */}
      <div className="footer-header">
        {/* <div className="image"></div> */}
        <p>Connect with us</p>
        <div className="donate-icons">
          <div className="icons">
            <a
              href="https://www.instagram.com/parikrantifoundation/?igsh=c2Y2MWN1ZWJqNHpi"
              className="icon"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./Images/instagram-icon.svg" alt="" />
            </a>

            <a
              href="https://www.linkedin.com/company/parikrantifoundation/"
              className="icon"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./Images/linkedin-icon.svg" alt="" />
            </a>

            <a
              href="https://www.facebook.com/ParikrantiFoundation/"
              className="icon"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./Images/facebook-icon.svg" alt="" />
            </a>

            <a
              href="https://x.com/ParikrantiF?s=08"
              className="icon"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./Images/x-icon.svg" alt="" />
            </a>

            <a
              href="https://www.youtube.com/@parikrantifoundation"
              className="icon"
              rel="noreferrer"
              target="_blank"
            >
              <img className="icon2" src="./Images/youtube_icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* header */}

      <div className="footer-container">
        <div className="footer-section">
          <h4>PARIKRANTI FOUNDATION</h4>
          <p>This is a Non-Government Organization.</p>
          <img src="/Images/Parikranti-image.png" alt="error" />
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/terms" smooth>
                Terms Of Use
              </Link>
            </li>

            <li>
              {" "}
              <Link to="/policy" smooth>
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/donation#form" smooth>
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" smooth>
                Home
              </Link>
            </li>

            <li>
              <Link to="/getInvolved" smooth>
                Get Involved
              </Link>
            </li>
            <li>
              <Link to="/about" smooth>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/idea" smooth>
                Idea And Strategy
              </Link>
            </li>
            <li>
              <Link to="/donation" smooth>
                Donation
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <img className="icon2" src="./Images/location-icon.svg" alt="" />

              <li>
                {" "}
                EH-81, Scheme no. 54, Vijay nagar, near Bapat Square, Indore
                (452010), Madhya Pradesh
              </li>
            </li>
            <li>
              <img className="icon2" src="./Images/email_icon.svg" alt="" />
              <a
                href="mailto:parikrantifoundation@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                parikrantifoundation@gmail.com
              </a>
            </li>
            <li>
              <img className="icon2" src="./Images/email_icon.svg" alt="" />
              <a
                href="mailto:admin@parikrantifoundation.org"
                target="_blank"
                rel="noreferrer"
              >
                admin@parikrantifoundation.org
              </a>
            </li>
            <li>
              <img className="icon2" src="./Images/call_icon.svg" alt="" />
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
