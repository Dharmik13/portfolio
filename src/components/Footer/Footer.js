import React from "react";
import "../Footer/footer.css";
import logo from "../../assets/images/mylogo.png";
// import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import BlackLine from "../Black Line/BlackLine";
import FooterBottom from "./FooterBottom";
import SocialMediaIcons from "../Constant/SocialMediaIcons";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerContainer">
        <div className="iconAndbutton">
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
          <div className="contactIcon">
            <SocialMediaIcons />
          </div>
        </div>

        <div className="LinksPart">
          <div className="quickLinkHeader">
            <h2>Quick Link</h2>
          </div>
          <ul className="linksPart">
            <li>
              <span className="link">About</span>
            </li>
            <li>
              <span className="link">Portfolio</span>
            </li>
            <li>
              <span className="link">Services</span>
            </li>
            <li>
              <span className="link">Blog</span>
            </li>
            <li>
              <span className="link">Contact</span>
            </li>
          </ul>
        </div>

        <div className="LinksPart">
          <div className="resourcesHeader">
            <h2>resources</h2>
          </div>
          <ul className="linksPart">
            <li>
              <span className="link">Authentication</span>
            </li>
            <li>
              <span className="link">System Status</span>
            </li>
            <li>
              <span className="link">Terms of Service</span>
            </li>
            <li>
              <span className="link">Pricing</span>
            </li>
            <li>
              <span className="link">Over Right</span>
            </li>
          </ul>
        </div>

        <div className="LinksPart">
          <div className="DevelopersHeader">
            <h2>Developers</h2>
          </div>
          <ul className="linksPart">
            <li>
              <span className="link">Documentation</span>
            </li>
            <li>
              <span className="link">Authentication</span>
            </li>
            <li>
              <span className="link">API Reference</span>
            </li>
            <li>
              <span className="link">Support</span>
            </li>
            <li>
              <span className="link">Open Source</span>
            </li>
          </ul>
        </div>
      </div>

      <BlackLine />
      <FooterBottom />
    </section>
  );
};

export default Footer;
