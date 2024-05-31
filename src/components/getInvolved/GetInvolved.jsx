
// import PopUpForm from '../../components/PopUpForm';
import LogoSlider from './LogoSlider';
import WhyUs from "./WhyUs";
import '../popUp.css';
import './style.css';
import React, { useState, useRef, useEffect } from 'react';


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
function App() {
  const [popUp, setPopUp] = useState(false);
  const popupRef = useRef(null);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };
  if(popUp) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
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
    <div className="gi-container">
<img className='gi-image' src='./Images/GetInvolved.png' alt="Get Involved"></img>
</div>
<WhyUs/>
{popUp && <PopUp togglePopUp={togglePopUp} popupRef={popupRef} />}
      <button className="btn" onClick={togglePopUp}>Get Involved</button>

   
    <LogoSlider/>
   
    <br></br>
              <br></br>    <br></br>
             
    </>
  );

}

export default App;

