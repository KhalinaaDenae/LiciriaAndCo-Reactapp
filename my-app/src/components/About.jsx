import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <div className="section">
      <div className="about-section">
        <img
          className="heroimg"
          src={require("../images/about.png")}
          alt="logo"
        />
        <div className="about-content">
          <h3 className="summer"> SUMMER LAYERS </h3>
          <p>
            A fully layered look makes the <br /> perfect finishing touch to any
            outfit.
          </p>
          <button className="about-btn">SHOP NOW</button>
        </div>
      </div>
      <div className="about-text">
        <h2 className="about-header">ABOUT US </h2>
        Liceria & Co. was founded in London in 2018 by Damasia Ball and
        Philippine de Follin. Firm friends, they had bonded over a shared
        perfectionism, a love of simple, uncomplicated design, and the fact that
        they are both from families of strong women. Endlessly inspired by the
        way their mothers, grandmothers and sisters adapt effortlessly to many
        roles, they decided to make jewellery that would do the same thing.
        Creating pieces that would accompany life’s joys and challenges – little
        luxuries that could be reached for again and again.
        <div className="about-ctnr">
          <div className="about-image">
            <img src={require("../images/slide1.png")} alt="About" />
          </div>

          <div className="about-p-text">
            <h3 className="em">
              We believe in how a piece of jewellery can make you feel.
            </h3>
            <p>
              Whether it’s a pearl to bring light to a dull morning or a pair of
              swishy earrings that make you want to dance, we design with one
              wish in mind – that you’ll find a piece in our collection that
              lifts your mood, and brings you comfort. A piece that fits, like
              the missing item from your wardrobe you’ve been searching for,
              forever.We want our creations to be your daily companions, that
              won’t go out of fashion in a matter of months. Classic, timeless
              icons. For this reason, our collections explore the heritage
              design details that resonate now – giving them new, contemporary
              life.
            </p>
          </div>
        </div>
      </div>
      <p className="quote">
        " More than just a jewelry brand,
        <br /> we are a movement on a mission to revolutionize the jewelry
        experience.”
      </p>
    </div>
  );
};

export default About;
