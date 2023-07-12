import React from 'react';
import HeroSection from './HeroSection';
import './styles/herosection.css';
import SocialMedia from './SocialMedia';
import './styles/socialmedia.css';
import Categories from './Categories';
import './styles/categories.css'
import BestSellers from './BestSellers';
import './styles/bestsellers.css'
import About from './About';
import './styles/about.css'
import Footer from './Footer';
import './styles/footer.css'
import ContactSection from './contactSection';

export const Shop = () => {
    return (
<div>
    <HeroSection/>
    <Categories/>
    <BestSellers/>
    <About/>
    <SocialMedia />
    <ContactSection />
    <Footer />
</div>
    );
  };
  

  