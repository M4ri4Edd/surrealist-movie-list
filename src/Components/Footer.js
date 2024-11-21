import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-logo-container">
          <h1>SURREALIST</h1>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <div className="footer-icons">
              <a href="https://x.com/MaLicht09" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />              
              </a>
              <a href="https://www.instagram.com/mariaeddy63/?next=%2F" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill/>
              </a>
            </div>
          </div>
          <div className="footer-section-columns">
            <span>luzdudinha@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="footer-section-terms-and-conditions">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
    </div>
  );
};

export default Footer;
