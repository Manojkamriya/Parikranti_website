import React from "react";
export default function Slider() {
  const row1 = [
    "/Images/logo-slider-image-1.png",
    "/Images/logo-slider-image-2.png",
    "/Images/logo-slider-image-3.png",
    "/Images/logo-slider-image-4.png",
    "/Images/logo-slider-image-5.png",
    "/Images/logo-slider-image-6.png",
  ];

  const row2 = [
    "/Images/logo-slider-image-7.png",
    "/Images/logo-slider-image-8.png",
    "/Images/logo-slider-image-9.png",
    "/Images/logo-slider-image-10.png",
    "/Images/logo-slider-image-11.png",
  ];
  return (
    <>
      <div className="appContainer">
       
          <h1>Our Partners & Collabrators</h1>
          <p>
            We greatly value the contributions and collabration of our esteemed
            partners and collaborators
          </p>
          <div className="slider-container">
            <div className="forward-slider">
              {row1.map((el) => (
                <div className="imageContainer">
                  <img src={el} alt="" />
                </div>
              ))}
            </div>
            <div className="forward-slider">
              {row1.map((el) => (
                <div className="imageContainer">
                  <img src={el} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-container">
            <div className="backward-slider">
              {row2.map((el) => (
                <div className="imageContainer">
                  <img src={el} alt="" />
                </div>
              ))}
            </div>
            <div className="backward-slider">
              {row2.map((el) => (
                <div className="imageContainer">
                  <img src={el} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
     
    </>
  );
}
