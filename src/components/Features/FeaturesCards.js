import React from "react";
import "../Features/features.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

import { HiArrowRight } from "react-icons/hi";
import BlackLine from "../Black Line/BlackLine";
import "../Black Line/blackLine.css";
const FeaturesCards = () => {
  const [features] = React.useState([
    {
      id: 1,
      icon: GiHamburgerMenu,
      title: "Web Development",
      des: "Builds, designs, and maintains all websites and software applications. Designs, writes, and edits website content. Understands UI, cross-browser compatibility, and general web functions and standards.",
    },
    {
      id: 2,
      icon: AiFillAppstore,
      title: "Front-End Development",
      des: "Use markup languages like HTML to create user-friendly web pages. Design mobile-based features. Maintain and improve website Optimize applications for maximum speed.",
    },
    {
      id: 3,
      icon: FaMobile,
      title: "Back-End Development",
      des: "Write code and tests, build prototypes, resolve issues, and profile and analyze bottlenecks. Design robust APIs to support mobile and desktop. Optimize web applications for performance and scalability.",
    },
    {
      id: 4,
      icon: SiProgress,
      title: "SEO Optimisation",
      des: "Helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.Represents your homepage.",
    },
    {
      id: 5,
      icon: FaGlobe,
      title: "Hosting Websites",
      des: "Storing all your website files on a server and providing a way for people to access those files through a web browser.publish web pages, making them accessible to everyone online.",
    },
    {
      id: 6,
      icon: SiAntdesign,
      title: "Ux Design",
      des: "he process of creating products or services that provide meaningful experiences for users, involving many different areas of product development including branding, usability, function, and design.",
    },
  ]);

  return (
    <>
      <section id="features">
        <div className="featuresContainer">
          <div className="featuresHeader">
            <h3 className="featuresheading">FEATURES</h3>
            <h1 className="headingH1">What I Do</h1>
          </div>

          {/* Cards Row */}
          <div className="cardRow">
            {features.map((feature) => (
              <div className="card" key={feature.id}>
                {React.createElement(feature.icon, { className: "cardicons" })}
                <div className="common">
                  <div className="cardHeader">
                    <h2>{feature.title}</h2>
                  </div>
                  <div className="cardPara">{feature.des}</div>
                  <span className="arrowicon">
                    <HiArrowRight className="hiarrow" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BlackLine />
      </section>
    </>
  );
};

export default FeaturesCards;
