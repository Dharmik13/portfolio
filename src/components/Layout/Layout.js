import React from "react";
import "../Layout/layout.css";
import Banner from "../BannerFile/Banner";
import FeaturesCards from "../Features/FeaturesCards";
import Project from "../Projects/Project";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <Banner />
      <FeaturesCards />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
