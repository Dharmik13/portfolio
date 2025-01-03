import React from "react";
import "../Projects/project.css";
import keepNotes from "../../assets/Project Images/keepNotes.jpg";
import news from "../../assets/Project Images/news.jpg";
import portfolio from "../../assets/Project Images/portfolio.jpg";
import weather from "../../assets/Project Images/weather.jpg";

import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import BlackLine from "../Black Line/BlackLine";

const ProjectsCards = () => {
  const [projects] = React.useState([
    {
      id: 1,
      image: news,
      projectName: "Daily-Top-News",
      icon1: FaGlobe,
      icon2: BsGithub,
      link1: "https://github.com/Dharmik13/daily-top-news",
      link2: "https://github.com/Dharmik13/daily-top-news",
      projectDesc:
        "Daily-Top News-App is a web-based application that shows the latest news categorized by topics like Business, Science, Sports, Health, Entertainment,Technology and many more. Built using the News API.",
    },
    {
      id: 2,
      image: keepNotes,
      projectName: "KEEP NOTES ",
      icon1: FaGlobe,
      icon2: BsGithub,
      link1: "https://github.com/Dharmik13/inotebook",
      link2: "https://github.com/Dharmik13/inotebook",
      projectDesc:
        "Keep Notes is a web-based application in which user can store its personal notes. User can Add Notes , Update or Edit Notes , Remove Notes also. Only Logged in use can Add , Update or Remove the Notes. ",
    },
    {
      id: 3,
      image: portfolio,
      projectName: "MY PORTFOLIO",
      icon1: FaGlobe,
      icon2: BsGithub,
      link1: "https://portfolio-ten-theta-64.vercel.app/",
      link2: "https://github.com/Dharmik13/portfolio",
      projectDesc:
        "My Portfolio is a web-based application in which I describe My All details like 'Name' , 'Education' , 'Skills' , 'Projects' , 'Features' and More... ",
    },
    {
      id: 4,
      image: weather,
      projectName: "DYNAMIC WEATHER",
      icon1: FaGlobe,
      icon2: BsGithub,
      link1: "",
      link2: "",
      projectDesc:
        "Dynamic Weather is a web based application in which user can see current weather details of perticular City/Area. Details like Temperature , Pressure , Humidity , Wind...etc are displayed in front of user.All The Weather Details comes throw weather web API.",
    },
  ]);

  return (
    <section>
      <div className="projectcardRow">
        {projects.map((myProject) => (
          <div className="projectCard" key={myProject.id}>
            <div className="imageSec">
              <img src={myProject.image} alt="projectImg" />
            </div>

            <div className="projectexplain">
              <div className="projectExpHeader">
                <h3>{myProject.projectName}</h3>

                <div className="iconsofGandB">
                  <span className="iconsofproject">
                    <a
                      href={myProject.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {<myProject.icon1 />}
                    </a>
                  </span>
                  <span className="iconsofproject">
                    <a
                      href={myProject.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {<myProject.icon2 />}
                    </a>
                  </span>
                </div>
              </div>

              <div className="projectdesc">{myProject.projectDesc}</div>
            </div>
          </div>
        ))}
      </div>
      <BlackLine />
    </section>
  );
};

export default ProjectsCards;
