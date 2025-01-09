import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import "../BannerFile/banner.css";
import SocialMediaIcons from "../Constant/SocialMediaIcons";
const MediaIcons = () => {
  return (
    <div className="iconContainer">
      <div className="leftIcons">
        <h2 className="iconHeader">FIND ME IN</h2>
        <div className="icons">
          <SocialMediaIcons />
        </div>
      </div>

      <div className="rightIcons">
        <h2 className="iconHeader">BEST SKILL ON</h2>
        <div className="icons">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaIcons;
