import React from "react";
import "./index.css"

const FooterComp = () => {
  return (
    <footer>
      <div class="footer-container">
        <header class="footer-nav-header">
          <div className="comp-logo">
            <img className="footer-logo-icon" src="https://res.cloudinary.com/ccbp-tech-hanu/image/upload/v1680455357/photo_6145657262509765746_m_tl6bgc.jpg" alt="NRSI" />
          </div>
          <div class="footer-container">
            <h6 class="company-name">Company</h6>
            <nav class="vertical-nav">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Our Offering</a>
                </li>
                <li>
                  <a href="#">Our team</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer-container">
            <h6 class="company-name">Useful Link</h6>
            <nav class="vertical-nav">
              <ul>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">FAQ'S</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="email-row">
            <div class="email-section">
              <img src="email-logo.png" alt="Email Icon" />
              <div class="email-content">
                <span class="email-text">Email:</span>
                <a href="mailto:your.email@example.com" class="email-address">
                  your.email@example.com
                </a>
              </div>
            </div>
            <div class="email-section">
              <img src="email-logo.png" alt="phone Icon" />
              <div class="email-content">
                <span class="email-text">Phone:</span>
                <a href="mailto:your.email@example.com" class="email-address">
                  +91|9848901122
                </a>
              </div>
            </div>
          </div>
        </header>

        <div class="row">
          <div class="col-md-6">
            <p className="footer-para">Copyright 2023. Designed By INRE Global</p>
          </div>
          <div class="col-md-6">
            <ul class="social-icons">
              <li>
                <a href="#">
                  <img src="facebook.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="linkedin.png" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="instagram.png" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="instagram.png" alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
