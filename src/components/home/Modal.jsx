// import React, { useState } from 'react'
// import PopUp from '../../components/PopUpForm';


// export default function Modal() {
//     const [modal, setModal] = useState(true);
  
//     const toggleModal = () => {
//       setModal(!modal);
//     };
  
//     if(modal) {
//       document.body.classList.add('active-modal')
//     } else {
//       document.body.classList.remove('active-modal')
//     }
  
//     return (
//       <>
       
  
//         {modal && (
//           <div className="modal">
//             <div onClick={toggleModal} className="overlay"></div>
//             <div className="modal-content">
// <PopUp/>
// <button className="close-modal" onClick={toggleModal}>
// <img src='./Images/cross.png' id='cross_img' alt='error'></img>
//               </button>
//               </div>
//           </div>
//         )}
       
//       </>
//     );
//   }


// import PopUpForm from '../../components/PopUpForm';

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

export default App;


  