import React, { useState } from 'react';
import './Index_page.css';
import './Modal.css';
import PopUp from '../../components/PopUp';

function Index_Page() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <a href="/home" target="_blank">
        <img id="logo1" src='./Images/white_logo.png' width="170px" height="170px" alt="Logo" />
      </a>
    
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

      <button className="btn1" onClick={toggleModal}>Get Involved</button>
      {modal && <Modal toggleModal={toggleModal}/>}
    </div>
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

export default Index_Page;
