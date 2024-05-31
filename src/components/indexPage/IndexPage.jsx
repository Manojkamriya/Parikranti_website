import React, { useState } from "react";
import "./indexPage.css";

// import PopUp from "../../components/PopUp";
import "../../components/popUp.css";

function IndexPage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <a href="/home" target="_blank">
        <img
          id="logo1"
          src="./Images/white_logo.png"
          width="170px"
          height="170px"
          alt="Logo"
        />
      </a>

      <p id="name_1">PARIKRANTI FOUNDATION</p>

      <div id="boxrow1">
        <div className="item" id="bx1">
          <img
            id="logo2"
            src="./Images/united-social-federation.png"
            alt="Logo"
          />
          <p className="box-title">United Social Federation</p>
        </div>
        <div className="item" id="box2">
          <img id="logo2" src="./Images/social-panchayat.png" alt="Logo" />
          <p className="box-title">The social panchayat</p>
        </div>
        <div className="item" id="box3">
          <img id="logo2" src="./Images/white_logo.png" alt="Logo" />
          <p className="box-title">The X fundamental </p>
        </div>
        <div className="item" id="box4">
          <img id="logo2" src="./Images/ultra-bharat.png" alt="Logo" />
          <p className="box-title">The Ultra Bharat </p>
        </div>
      </div>

      <div id="boxrow2">
        <div className="item" id="box5">
          <img id="logo2" src="./Images/white_logo.png" alt="Logo" />
          <p className="box-title">The Big Heart </p>
        </div>
        <div className="item" id="box6">
          <img id="logo2" src="./Images/white_logo.png" alt="Logo" />
          <p className="box-title">The X Founders </p>
        </div>
        <div className="item" id="box7">
          <img id="logo2" src="./Images/white_logo.png" alt="Logo" />
          <p className="box-title">The Holistic Incubation</p>
        </div>
        <div className="item" id="box8">
          <img id="logo2" src="./Images/white_logo.png" alt="Logo" />
          <p className="box-title">The X solution pvt ltd</p>
        </div>
      </div>

      <button className="btn1" onClick={toggleModal}>
        Get Involved
      </button>
      {modal && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

function Modal({ toggleModal }) {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        {/* <PopUp /> */}
        <button className="close-modal" onClick={toggleModal}>
          <img src="./Images/cross.png" id="cross_img" alt="error"></img>
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
