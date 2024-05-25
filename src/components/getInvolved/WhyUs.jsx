import React from "react";

function WhyUs() {
  return (
    <div className="whyUs-container">
      <div className="whyUs-content">
        <h1>Why Parikranti Foundation?</h1>
        <p>
          Get involved with our NGO to make a meaningful impact and experience personal growth. Connect with a supportive community dedicated to social change, and access a global network of opportunities. Contribute to important causes, find fulfillment, and drive positive change in the world. Join us in our mission to create a better, more equitable future for all.When you connect with us, you'll find yourself surrounded by like-minded individuals, all driven by the desire to create positive social change. Whether you're passionate about environmental sustainability, human rights, education, or any other important cause, there's a place for you here.
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
