import React from 'react';

const SocialMedia = () => {
  const imagePaths = [
    require('../images/image1.png'),
    require('../images/image2.png'),
    require('../images/image3.png'),
    require('../images/image4.png'),
    require('../images/image5.png'),
    require('../images/image6.png'),
    require('../images/image7.png'),
    require('../images/image8.png'),
    require('../images/image9.png'),
    require('../images/image10.png'),
    require('../images/image11.png'),
    require('../images/image12.png'),
  ];

  return (
    <section className="social-media">
      <div className="social-media-container">
        <h2>@Liceriaandco</h2>
        <div className="social-media-image-grid">
          {imagePaths.map((path, index) => (
            <img className='socialMediaImg'
            src={path} alt={`instagram ${index + 1}`} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;