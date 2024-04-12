import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{color : 'black', marginLeft : '1vw', fontSize : '2.3vh'}}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/ParikrantiFoundation/' className='me-4 text-dark'>
            <MDBIcon color='dark' fab icon='facebook-f' />
          </a>
          {/* <a href='' className='me-4 text-dark'>
            <MDBIcon color='dark' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-dark'>
            <MDBIcon color='dark' fab icon='google' />
          </a> */}
          <a href='https://www.instagram.com/parikrantifoundation?igsh=MTI5djlkN2N3N2pmbg==' className='me-4 text-dark'>
            <MDBIcon color='dark' fab icon='instagram' />
          </a>
          <a href='https://in.linkedin.com/company/parikranti-foundation' className='me-4 text-dark'>
            <MDBIcon color='dark' fab icon='linkedin' />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase text-dark fw-bold mb-4'>
                <MDBIcon color='dark' icon='gem' className='me-3 text-left' />
                Parikranti Foundation
              </h6>
              <p className='text-dark'>
                Non-Government Organization.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase  text-dark fw-bold mb-4'>Useful Links</h6>
              <p>
                <a href='#!' className='text-dark  text-left'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                GetInvolved
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                  Idea and Strategy
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase text-dark fw-bold mb-4'>Quick Findings</h6>
              <p>
                <a href='#!' className='text-dark'>
                Get In Touch
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                Donate Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase text-dark fw-bold mb-4'>Contact Us</h6>
              <p className='text-dark'>
                <MDBIcon color='dark' icon='home' className='me-2' />
                 EH 81, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh 452010
              </p>
              <p className='text-dark'>
                <MDBIcon color='dark' icon='envelope' className='me-3' />
                parikrantifoundation@gmail.com
              </p>
              <p className='text-dark'>
                <MDBIcon color='dark' icon='phone' className='me-3' />6267785438 / 7225999084
              </p>
              {/* <p className='text-dark'>
                <MDBIcon color='dark' icon='print' className='me-3' /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-dark text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-dark fw-bold' href='https://mdbootstrap.com/'>
         Parikranti Foundation
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;