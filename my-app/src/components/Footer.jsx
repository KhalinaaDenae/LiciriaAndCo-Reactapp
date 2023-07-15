import React from "react";
import "./styles/footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-columns">
        <div className="column">
          <h5 className="header">Jewlery </h5>
          <ul>
            <li>Shipping </li>
            <li> Returns & Exhanges </li>
            <li> Warranty </li>
            <li>Accessibility Statements </li>
            <li> FAQ </li>
            <li> Contact Us </li>
          </ul>
        </div>
        <div className="column">
          <h5 className="header"> About Us </h5>
          <ul>
            <li> About Liceria </li>
            <li> Sustainability </li>
            <li> Careers </li>
            <li> Blog </li>
          </ul>
        </div>
        <div className="column">
          <h5 className="header"> About Us </h5>
          <ul>
            <li> Earrings</li>
            <li> Necklaces </li>
            <li> Bracelets </li>
            <li> Rings </li>
          </ul>
        </div>
        <div className="column">
          <div className="newsletter">
            <img
              className="footer-img"
              src={require("../images/newsletter.png")}
            />
            <div className="bottom-right">
              <p>
                Sign up to our newsletter <br /> for 10% off your furst order.{" "}
              </p>
              <input
                className="footer-input"
                type="email"
                name=""
                id=""
                placeholder="Enter your email address"
              />
              <br />
              <div className="social-icons">
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
