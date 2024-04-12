import React, { useState } from 'react'
import './Modal.css'
import PopUp from '../../components/PopUp';


export default function Modal() {
    const [modal, setModal] = useState(true);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        {/* <button onClick={toggleModal} className="btn-modal">
          Open
        </button> */}
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
<PopUp/>
<button className="close-modal" onClick={toggleModal}>
<img src='./Images/cross.png' id='cross_img' alt='error'></img>
              </button>
              </div>
          </div>
        )}
       
      </>
    );
  }