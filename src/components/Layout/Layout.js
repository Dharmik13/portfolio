import React from "react";
import "../Layout/layout.css";
import Banner from "../BannerFile/Banner";
import FeaturesCards from "../Features/FeaturesCards";
import Project from "../Projects/Project";
import Skills from "../Skill/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import EduExpHeader from "../Education And Experience/EduExpHeader";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <Banner />
      <FeaturesCards />
      <Project />
      <EduExpHeader />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
