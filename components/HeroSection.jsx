import React from 'react';

const HeroSection = () => {
    return (
      <div className="hero-section">
          <img 
          src={require('./homeimg.jpeg')} 
          alt="logo" 
        />
        <div className="hero-content">
          <p>A inspirational jewelry brand symbolising elegance & self-belief <br /> accentuating unique traits that make you YOU. 
</p>
<br />
<h3 className='shop-cta'> SHOP NOW </h3>
        
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  