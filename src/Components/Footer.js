import React from "react";
import { BsTwitter } from "react-icons/bs";
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
              <BsTwitter />
              <RiInstagramFill/>
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
