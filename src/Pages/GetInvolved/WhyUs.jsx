import React from "react";

function WhyUs() {
  return (
    <div className="whyUs-container">
      <div className="whyUs-content">
        <h1 className="para_W">Why Parikranti Foundation?</h1>
        <p className="para_W">
          Get involved with our NGO to make a meaningful impact and experience personal growth. Connect with a supportive community dedicated to social change, and access a global network of opportunities. Contribute to important causes, find fulfillment, and drive positive change in the world. Join us in our mission to create a better, more equitable future for all.
        </p>
      </div>
      <iframe 
        className="whyUs-content"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/NWBHTIB6Rw4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default WhyUs;
