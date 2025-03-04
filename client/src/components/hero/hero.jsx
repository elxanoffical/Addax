import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="blur">
        <span>We Are Creative</span>
        <h1>
          The Best <span id="digital">Digital</span> Experience
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="btn">
          <button id="btn">Get started</button>
          <button id="btnn">View Work</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
