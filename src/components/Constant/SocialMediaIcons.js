import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socialMediaLinks = [
  {
    href: "https://www.instagram.com/patel.dharmik.1310?igsh=MW42MzJ5NWV3ZGZmeA==",
    icon: <FaInstagram />,
  },
  {
    href: "https://x.com/PatelDharmik45?t=v7GLWQMfjrzMmWQm6k9SuQ&s=09",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/patel-dharmik-913705189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedinIn />,
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="icons">
      {socialMediaLinks.map((link, index) => (
        <span className="bannerIcon" key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            {link.icon}
          </a>
        </span>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
