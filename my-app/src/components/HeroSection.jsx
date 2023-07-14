import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img className="heroimg" src={require("./homeimg.jpeg")} alt="logo" />
      <div className="hero-content">
        <p>
          A inspirational jewelry brand symbolising elegance & self-belief{" "}
          accentuating unique traits that make you YOU.
        </p>
        <br />
      </div>
    </div>
  );
};

export default HeroSection;
