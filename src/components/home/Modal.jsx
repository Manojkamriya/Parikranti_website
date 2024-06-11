
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
          <img src='./Images/cross.png' alt='error'></img>
        </button>
         </div>
         </div>
    </>

  );
}
function Modal() {
  const [popUp, setPopUp] = useState(true);
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
   

{popUp && <PopUp togglePopUp={togglePopUp} popupRef={popupRef} />}
             
    </>
  );

}

export default Modal;


  