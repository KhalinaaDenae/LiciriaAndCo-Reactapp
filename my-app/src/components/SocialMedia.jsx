import React from "react";

const SocialMedia = () => {
  const imagePaths = [
    require("../images/image2.png"),
    require("../images/image4.png"),
    require("../images/image6.png"),
    require("../images/image7.png"),
    require("../images/image9.png"),
    require("../images/image11.png"),
  ];

  return (
    <section className="social-media">
      <div className="social-media-container">
        <h2>
          {" "}
          BE APART OF OUR GROWING COMMUNITY <br />
          @Liceriaandco
        </h2>
        <div className="social-media-image-grid">
          {imagePaths.map((path, index) => (
            <img
              className="socialMediaImg"
              src={path}
              alt={`instagram ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
