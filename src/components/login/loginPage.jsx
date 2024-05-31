
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import PopUpForm from '../PopUpForm';

function PopUp({ togglePopUp, popupRef }) {
  return (
    <> 
       <div className="modal">
      <div onClick={togglePopUp} className="overlay"></div> 
      <div className="popup-content center2" ref={popupRef}>
     
        <PopUpForm/>
        <button className="close-modal" onClick={togglePopUp}>
          <img src='./Images/cross.png' id='cross_img' alt='error'></img>
        </button>
         </div>
         </div>
    </>

  );
}

export default function LoginPage() {
  const [popUp, setPopUp] = useState(false);
  const popupRef = useRef(null);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  useEffect(() => {
    if (popupRef.current) {
      if (popUp) {
        popupRef.current.classList.add('active');
      } else {
        popupRef.current.classList.remove('active');
      }
    }
  }, [popUp]);

  return (
    <>
      <h1>This is the login page</h1>
      {popUp && <PopUp togglePopUp={togglePopUp} popupRef={popupRef} />}
      <button className="btn" onClick={togglePopUp}>Get Involved</button>
      <br />
      <Link to="/">
        <button><h3>Go Back to Home</h3></button>
      </Link>
      
    </>
  );
}
