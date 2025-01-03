import React from "react";
import "../BannerFile/banner.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import bannerImg from "../../assets/images/myPhoto.png";
import MediaIcons from "./MediaIcons";
import BlackLine from "../Black Line/BlackLine";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer.",
      "React Js Developer.",
      "Frontend Developer.",
      "Backend Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section id="home">
      <div className="bannerContainer">
        <div className="leftContainer">
          <div className="devinfo">
            <h2 className="welcome">WELCOME TO MY WORLD</h2>
            <h1 className="hello">
              {" "}
              Hi, I'm <span className="devName">Dharmik Patel</span>
            </h1>
            <h2 className="devRole">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className="devDesc">
              {" "}
              I am a Paassionate Web developer with a degree from 'Charotar
              University of Science and Technology, Anand' in Software
              Engineering and hands-on experince in developing "Dynamic" and
              "Static" web applications. Recent graduate with a degree in
              Information Technology. Proficient in HTML, CSS, Javascript, React
              js, Node js, Express js, MongoDB and more...with additional skills
              in Responsive design frameworks like Bootstrap. Experienced in
              developing responsive websites and collaborating with
              cross-functional teams through internships and projects.
            </p>
          </div>

          {/* media  */}

          <MediaIcons />
        </div>

        <div className="rightContainer">
          <div className="devImg">
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
      <BlackLine />
    </section>
  );
};

export default Banner;
