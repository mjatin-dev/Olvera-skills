import React from "react";
import "./style.css";

import ellery from "../../assets/icons/ELLERY_LOGO_6c6dab96-5cc9-4b2e-90aa-4ae6c46de8d8_180x 2.png";
import bank from "../../assets/icons/pngwing.com - 2023-06-09T115326 2.png";
import howards from "../../assets/icons/pngegg 4@2x.png";
import slide3 from "../../assets/backgrounds/Mask group (1).png";
import playIcon from "../../assets/icons/noun-play-654294 1.png";
import arrowIcon from "../../assets/icons/trending_flat_FILL0_wght400_GRAD0_opsz24 (1).png";
import gingerSmart from "../../assets/icons/GINGERANDSMART_HI_RES_LOGO-NEW-011118-LRG 2.png";
import Reviews from "../../components/shared/Reviews";
import Services from "../../components/shared/Services";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="slide_1">
        <div className="dashboard_contactUs">
          <h1>Start your story with Olvera</h1>
          <button className="contact_button">CONTACT US</button>
        </div>
      </div>
      <div className="slide_2">
        <div className="about_olvera">
          <h1>About Olvera</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="slide2_bottom_links">
            <img src={howards} className="slide_2_img" alt="image" />
            <img src={bank} className="slide_2_img" alt="image" />
            <img src={ellery} className="slide_2_img" alt="image" />
            <img src={gingerSmart} className="slide_2_img" alt="image" />
          </div>
        </div>
      </div>

      <div className="slide_4">
        <Services />
      </div>
      <div className="slide_5">
        <div className="olvera_guides">
          <h1>Olvera Guides</h1>
          <button className="arrow_button">
            View More{" "}
            <div className="arrowIcon">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="slide_5_xs">
        <div className="olvera_guides_xs">
          <h1>Olvera Guides</h1>
          <h2>Careers at Olvera</h2>
          <h3>Ollie Restructuring Guide</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="arrow_button_xs">
            View More{" "}
            <div className="arrowIcon_xs">
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </button>
        </div>
      </div>
      <div className="slide_3">
        <div className="slide_3_content">
          <div className="carrers">
            <h1>Carrers</h1>
            <h2>Careers at Olvera</h2>
            <p>
              Navigate change, develop on-demand skills. Your turnaround journey
              starts with Olvera.
            </p>
            <button className="carrers_button">Search Carrers</button>
          </div>
          <img src={slide3} alt="image" className="slide3img" />
        </div>
      </div>

      <div className="slide_6">
        <div className="slide_6_playButton">
          <img src={playIcon} alt="playIcon" className="playIcon" />
        </div>
      </div>
      <div className="slide_7">
        <div className="slide_7_content">
          <p className="slide_7_contentP">What our clients say about us</p>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
