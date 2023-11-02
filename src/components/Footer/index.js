import React from "react";
import "./style.css";
import logo from "../../assets/images/Olvera-First-Logo-BGY-1 2.png";
import logo1 from "../../assets/icons/image 127.png";
import logo2 from "../../assets/icons/image 128.png";
import logo3 from "../../assets/icons/image 129.png";
import logo4 from "../../assets/icons/image 130.png";
import facebookIcon from "../../assets/icons/FacebookLogo.png";
import instaIcon from "../../assets/icons/InstagramLogo.png";
import linkedInIcon from "../../assets/icons/LinkedinLogo.png";
import tweterIcon from "../../assets/icons/TwitterLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <h1>We are open and accepting to all. Come work with us</h1>
        <p>
          Experts teach you everything from the comfort of your own home.
          Improve your career today by enrolling in excellent courses at
          affordable prices.
        </p>
        <button className="footer_button">Get Started</button>
        <div className="logos">
          <img src={logo1} className="logo showOnMobile" />
          <img src={logo2} className="logo showOnMobile" />
          <img src={logo3} className="logo showOnMobile" />
          <img src={logo4} className="logo showOnMobile" />
          <img src={logo} className="logo hideIt" />
        </div>

        <div className="footer_info_container">
          <div>
            <img src={logo} className="logo hideIt" />
            <p>Turning Uncertainty Into Your Advantage</p>
          </div>
          <ul>
            <li className="list_header">Resources</li>
            <li className="list_items">Home</li>
            <li className="list_items">Articles</li>
            <li className="list_items">Videos & Guides</li>
            <li className="list_items">About Us</li>
          </ul>
          <ul>
            <li className="list_header">Carreers</li>
            <li className="list_items">Olevera academy</li>
            <li className="list_items">Privacy Policy</li>
            <li className="list_items">Cookies</li>
          </ul>

          <ul>
            <li className="address_info">
              Liability Limited By A Scheme Approved Under Professional Services
              Scheme
            </li>
            <li className="address_info">Phone: (64) 09 973 4905</li>
            <li className="address_info">
              Email: ezibuyenquiries@olveraadvisors.com
            </li>
            <li className="address_info">Website: olvera.co.nz/ezibuy</li>
          </ul>
        </div>
      </div>
      <div className="social_links">
        <div className="social_links_box">
          <p>©2023 olevra advisors. All rights reserved</p>
          <div>
            <img src={facebookIcon} className="links" alt="facebook icon" />
            <img src={instaIcon} className="links" alt="instagram icon" />
            <img src={tweterIcon} className="links" alt="tweter icon" />
            <img src={linkedInIcon} className="links" alt="linkedIn icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
