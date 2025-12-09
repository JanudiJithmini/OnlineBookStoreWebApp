import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>Online BookStore</h2>
          <p>© 2024 Foodie. All rights reserved.</p>
          <div className="footer-socials-icons">
            <img src={facebook_icon} alt="facebook" />
            <img src={twitter_icon} alt="twitter" />
            <img src={linkedin_icon} alt="lInkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 789-678-787</li>
            <li>akmeemanajanudi@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ bookstore.com- All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
