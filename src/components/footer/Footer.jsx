import React from "react";
import logo from "../../assets/logo512.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="myFooter">
          <div className="footerCol">
            <img
              src={logo}
              height="160"
              width="160"
              alt="saxony-uganda partnership logo"
            />
          </div>

          <div className="footerCol">
            <div>
              <h6>Uganda-Saxony</h6>
            </div>
            <div className="footerLinks">
              <Link to="/our_work" className="sectionLink">About us</Link>
              <Link to="/events" className="sectionLink">Events</Link>
              <Link to="/resources" className="sectionLink">Resources</Link>
              <Link to="/contact_us" className="sectionLink">Contact us</Link>
              <Link to="/join_project" className="sectionLink">Join Partnership</Link>
            </div>
          </div>

          <div className="footerCol">
            <div>
              <h6>Useful Links</h6>
            </div>
            <div className="footerLinks">
              <Link to='https://cms.uganda-saxonypartnership.org/wp-admin' target='_blank' rel='noreferrer'>Staff</Link>
              {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
              <Link to="/cookie-policy">Cookie Policy</Link>
              {/* <Link to="/terms&Conditions">Terms & Conditions</Link> */}
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Conditions</Link>
            </div>
          </div>

          <div className="footerCol">
            <div>
              <h6>Social Media</h6>
            </div>
            <div className="footerLinks">
              <div className="socialIconsWrapper">
                <span className="socialHeader">Saxony Uganda</span>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094606894335"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      className="socialIcons"
                      size={24}
                      color="#b7b5b1"
                    />
                  </a>

                  <a
                    href="https://twitter.com/uganda_saxony"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter
                      className="socialIcons"
                      size={24}
                      color="#b7b5b1"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/uganda_saxony_partnership/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={24}
                      color="#b7b5b1"
                    />
                  </a>
                </div>
              </div>

              <div className="socialIconsWrapper">
                <span className="socialHeader">Saxony Germany</span>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094409740783"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      className="socialIcons"
                      size={24}
                      color="#b7b5b1"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/ugandasachsenpartnerschaft/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={24}
                      color="#b7b5b1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="copyRightSection">
        <h6>
          &copy; Uganda-Saxony Partnership | Built and powered by Tenda Africa
        </h6>
      </div>
    </div>
  );
};

export default Footer;
