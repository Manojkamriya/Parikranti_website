
import React, { useState } from 'react';
import styled, { keyframes, css } from "styled-components";
import '../../components/Modal.css';
import PopUp from '../../components/PopUp';
import LogoSlider from './LogoSlider';
import WhyUs from "./WhyUs";
import './style.css';

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
 

  return (
    <>
    <div className="gi-container">
<img className='gi-image' src='./Images/GetInvolved.png' alt="Get Involved"></img>
</div>
<WhyUs/>

<button typ="button" className="btn" onClick={toggleModal}>Get Involved</button>
      {modal && <Modal toggleModal={toggleModal}/>}

   
    <LogoSlider/>
    <br></br>
              <br></br>    <br></br>
             
    </>
  );

}
function Modal({ toggleModal }) {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <PopUp/>
        <button className="close-modal" onClick={toggleModal}>
          <img src='./Images/cross.png' id='cross_img' alt='error'></img>
        </button>
      </div>
    </div>
  );
}
export default App;

