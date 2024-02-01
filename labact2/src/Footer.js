import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
            <span>
            <img
              src="assets/Mcdelivery.png"
              width="100"
              height="90"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </span></p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            FAQs
          </a>
          <a href="#" className="footer-link">
            Search
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;