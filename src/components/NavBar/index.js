import React from "react";
import "./style.css";
import logo from "../../assets/images/Olvera-Logo-Black 1.png";
import facebookIcon from "../../assets/icons/FacebookLogo.png";
import instaIcon from "../../assets/icons/InstagramLogo.png";
import linkedInIcon from "../../assets/icons/LinkedinLogo.png";
import menuIcon from "../../assets/icons/menu_FILL0_wght400_GRAD0_opsz24 (1)search.png";
import searchIcon from "../../assets/icons/Vectorsearch.png";
function NavBar() {
  return (
    <div className="navbar">
      <div className="tag_line">
        <h1>Turning Uncertainity Into your advantage</h1>
      </div>
      <nav className="nav">
        <img src={logo} alt="logo" className="nav_logo" />
        <div className="nav_items">HOME</div>
        <div className="nav_items">ABOUT US</div>
        <div className="nav_items">OUR SERVICES</div>
        <div className="nav_items">OUR EXPERIENCE</div>
        <div className="nav_items">RESOURCES</div>
        <button className="nav_button">CONTACT US</button>
        <div className="menu_icons">
          <img src={facebookIcon} className="nav_links" alt="facebook icon" />
          <img src={instaIcon} className="nav_links" alt="instagram icon" />
          <img src={linkedInIcon} className="nav_links" alt="linkedIn icon" />
          <img
            src={searchIcon}
            className="nav_links search_icon"
            alt="linkedIn icon"
          />
          <img
            src={menuIcon}
            className="nav_links search_icon"
            alt="linkedIn icon"
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
