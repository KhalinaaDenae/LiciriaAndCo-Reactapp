import React from 'react';
import './styles/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-columns">
        <div className="column">
          <h5 className='header'>Jewlery </h5>
          <ul>
            <li>Necklaces</li>
            <li> Bracelets </li>
            <li>Rings</li>
            <li>Anklets</li>
            <li> Earrings </li>
          </ul>
        </div>
        <div className="column">
          <h5 className='header'>General </h5>
          <ul>
            <li> About </li>
            <li> Contact </li>
            <li> FAQ </li>
          </ul>
        </div>
        <div className="column">
        <div className="footer-bottom">
        <h6 className='header'> Liceria & Co. </h6>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
