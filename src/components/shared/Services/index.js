import React from "react";
import arrowIcon from "../../../assets/icons/trending_flat_FILL0_wght400_GRAD0_opsz24 (1).png";

import "./style.css";

function Services() {
  return (
    <div className="services">
      <div className="services_items">
        <div>
          <h1>150+</h1>
          <p>Projects</p>
        </div>

        <div>
          <h1>80+</h1>
          <p>Clients</p>
        </div>

        <div>
          <h1>200+</h1>
          <p>Professional</p>
        </div>
        <div>
          <h1>97%</h1>
          <p>Clients</p>
        </div>
      </div>
      <div className="services_section">
        <div className="services_section_heading">
          <h3>SERVICES</h3>
          <h6>Our services that can help your business</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
          </p>
        </div>
        <div className="service_terms">
          <div className="service_terms_items">
            <p>Sustainability</p>
            <img src={arrowIcon} className="flatArrow" alt="" />
          </div>

          <div className="service_terms_items">
            <div>
              <h5>02.</h5>
              <p>Small Business</p>
            </div>

            <img src={arrowIcon} className="flatArrow" alt="" />
          </div>

          <div className="service_terms_items">
            <div>
              <h5>03.</h5>
              <p>Forensic Services</p>
            </div>
            <img src={arrowIcon} className="flatArrow" alt="" />
          </div>

          <div className="service_terms_items">
            <div>
              <h5>04.</h5>
              <p>Risk Management</p>
            </div>
            <img src={arrowIcon} className="flatArrow" alt="" />
          </div>

          <div className="service_terms_items">
            <div>
              <h5>05.</h5>
              <p>CFO Advisory</p>
            </div>
            <img src={arrowIcon} className="flatArrow" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
